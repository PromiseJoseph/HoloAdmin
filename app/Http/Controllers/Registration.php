<?php

namespace App\Http\Controllers;

use App\Models\FileDetail;
use App\Models\Registration as conferenceRegistration;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\LazyCollection;
use SebastianBergmann\Type\VoidType;

use function PHPSTORM_META\map;

class Registration extends Controller
{
    /**
     * gets all data depending on how it's being used on the front end
     */
    protected function allregistry()
    {

        $user = auth()->user();
        $registry = ConferenceRegistration::orderByDesc('id')
            ->get()
            ->all();
        $registryCount = ConferenceRegistration::all()
            ->count();
        $monthRegistry = ConferenceRegistration::where("month", date("m"))
            ->get()->count();
        $dayRegistry = ConferenceRegistration::where("day", date("d"))
            ->get()->count();
        $recentActivity = ConferenceRegistration::latest()
            ->get()->take(5);


        if ($registry && $registryCount) {

            return response([
                "user" => $user,
                "status" => true,
                "item" => $registry,
                "count" => $registryCount,
                "totalRevenue" => $registryCount * 1000,
                "monthRegistry" => $monthRegistry,
                "dayRegistry" => $dayRegistry,
                "recentActivity" => $recentActivity
            ], 200);
        }
        return $this->sendBadResponse("an error occured or there are no current registration", 500);
    }



    /**
     * for single Item
     * @param int $id  
     */
    protected function getSingle($id)
    {
        $Item = conferenceRegistration::findOrFail($id);

        if ($Item) {
            return response([
                "status" => true,
                "item" => $Item,
            ], 200);
            return self::sendBadResponse("item not found", 401);
        }
    }



    /**
     * for only payment id
     * @param string $payment  
     */
    protected function getPay($payment)
    {
        $Item = conferenceRegistration::where("payment_id", "=", $payment)->get();
        if ($Item) {
            return response([
                "status" => true,
                "item" => $Item,
            ], 200);
        }
        return self::sendBadResponse("item not found", 401);
    }



    /**
     * for new registration
     * */
    protected function  makeRegistration(Request $request)
    {

        $Mver = self::regValidate($request);

        if ($Mver) {
            $newReg = new conferenceRegistration;
            $newReg->name = $request->name;
            $newReg->conference = $request->conference;
            $newReg->church = $request->church;
            $newReg->association = $request->association;
            $newReg->payment_id = $request->payment_id;

            $newReg->save();

            return $this->sendGoodResponse("uploaded successfuly", 200);
        }
        return;
    }

    /**
     * handles and upload mass registration file upload to db
     * @param string $filename
     * @param integer i
     */
    protected function fileUpload(Request $request, $filename)
    {

        //verifying if the user havent uploaded same spreadsheet before
        $fetchedItem = FileDetail::where("filename", $filename)->get()->toArray();
        $fetchedFname = false;
        //    dd( $fetchedItem[0]['filename']);

        $fetchedItem[0]['filename'] == $filename ? $fetchedFname = true : $fetchedFname;

        $curUserId = auth()->user()->id;
        $poster = FileDetail::find($fetchedItem[0]['id'])->User;

        if ($fetchedFname == true && $poster->id == $curUserId) {
            return self::sendBadResponse("File had been uploaded by you before",500);
        } elseif ($fetchedFname && $poster->id != $curUserId) {
            return self::sendBadResponse("File had been uploaded by another admin before", 500);
        } else {
            $data = collect($request)
                ->map(function ($item) {
                    return [
                        "name" => $item["Name"],
                        "conference" => $item["Conference"],
                        "association" => $item["Association"],
                        "church" => $item["Church"],
                        "payment_id" => $item["paymet_id"],

                    ];
                })->toArray();

            $insertReg =  conferenceRegistration::insert($data);
            $insertDet = FileDetail::insert([
                "id" => auth()->user()->id,
                "filename" => $filename,
            ]);
            if ($insertDet && $insertReg) {
                return self::sendGoodResponse("File uploaded successfully", 200);
            }
            return self::sendBadResponse("An error ocurred and we can't upload your file at the moment ", 500);
        }
    }
    /**
     * Updates registration
     * @param int $id
     */
    protected function regUpdate(Request $request, $id)
    {
        $Uver = self::regValidate($request);

        if ($Uver) {

            $raw = conferenceRegistration::findOrFail($id);


            $updateVer = $raw->update(
                [
                    "name" => $request->name,
                    "conference" => $request->conference,
                    "association" => $request->association,
                    "church" => $request->church,
                    "payment_id" => $request->payment_id,
                ]
            );
            $raw->save();
            if ($updateVer) {
                return $this->sendGoodResponse("Updated Successfuly", 200);
            }
        }
        unset($data);
    }



    /**
     * Deletes a registration
     * 
     */
    protected function deleteReg(Request $request)
    {

        if ($request) {
            $id = $request->id;
            $getId = conferenceRegistration::findOrFail($id);

            $deleted = $getId->delete();
            if ($deleted) {
                return $this->sendGoodResponse("sucessfully deleted", 200);
            }
            return $this->sendBadResponse("Error occcur can't delete registration", 500);
        }
    }



    /**
     * static validation fuction
     *  @throws \Illuminate\Validation\ValidationException
     */
    public function regValidate($request)
    {
        $validation = $request->validate([
            "name" => "string|required",
            "conference" => "string|required",
            "association" => "string|required",
            "church" => "string|required",
            "payment_id" => "string|required",

        ]);
        if ($validation) {
            return true;
        }
        return false;
    }



    /**
     * generates a fast good response
     * @param string $mess
     * @param int $res
     */
    public function sendGoodResponse($mess,  $res)
    {
        return response([
            "status" => true,
            "message" => $mess,
        ], $res);
    }



    /**
     * generates a fast bad response
     * @param string $mess
     * @param int $res
     */
    public function sendBadResponse($mess, $res)
    {
        return response([
            "status" => false,
            "message" => $mess,
        ], $res);
    }



    // /**
    //  * checks if value is empty
    //  * @param array $item
    //  */
    // public function EmptyCheck(array $item){

    //    for($i=0;$i<count($item); $i++){
    //     if(empty($item[$i])){
    //         return $this->sendBadResponse("We cannot process your request at the moment ",500);
    //     }
    //     continue;
    //    }
    // }
}
