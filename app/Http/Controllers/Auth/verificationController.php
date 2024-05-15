<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Auth;

class verificationController extends Controller
{

    public function newVerification($request){
      if( $request->user()->hasVerifiedEmail()) {
        return ['message'=>'already verified'] ;
      }
       
        $request->user()->sendEmailVerificationNotification();
    }
    public function verify($id, Request $request) {
        
        if (!$request->hasValidSignature()) {
            return response()->json(["msg" => "Invalid/Expired url provided."], 403);
        }
    
        $user = User::findOrFail($id);
    
        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }
    
        return redirect()->to('/');
    }
    

    // public function resend() {
    //     if (auth()->user()->hasVerifiedEmail()) {
    //         return response()->json(["msg" => "Email already verified."], 400);
    //     }
    
    //     $request->user()->sendEmailVerificationNotification();
    
    //     return response()->json(["msg" => "Email verification link sent on your email id"]);
    // }
}
