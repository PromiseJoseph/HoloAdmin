<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

use function Laravel\Prompts\confirm;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $validation =   $request->validate([
            'name' => ['required', 'string','max:15'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'role' => ['required', 'string', 'max:40'],
            'company' => ['string', 'max:20', 'max:40'],
            'address' => ['required', 'string', 'max:25'],
            'phone' => ['required', 'string' ],
            'password' => ['required',  Rules\Password::min(8)->mixedCase()->numbers(), 'confirmed'],
        ]);
        if ($validation) {
            $user = User::create([
                'name' => $request->name,
                'role' => $request->role,
                'company' => $request->company,
                'address' => $request->address,
                'phone' => $request->phone,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            event(new Registered($user));

            // return response()->json(
            //     [
            //     'status' => 'true',
            //      'message' => "succesfully registered",
            //      'data' => $user
            //     ],200);
        }
    }
}
