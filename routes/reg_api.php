<?php
use App\Http\Controllers\Registration as RegistrationController;
use Illuminate\Support\Facades\Route as FacadesRoute;

FacadesRoute::middleware('auth')->group(function() {

    FacadesRoute::get('allregistrations',[RegistrationController::class,"allregistry"]);
    FacadesRoute::post('newregistration',[RegistrationController::class,"makeRegistration"]);
    FacadesRoute::post('updateregistration/{id}',[RegistrationController::class,"regUpdate"]);
    FacadesRoute::post('deleteregistration',[RegistrationController::class,"deleteReg"]);
    FacadesRoute::get('getSingle/{id}',[RegistrationController::class,"getSingle"]);
    FacadesRoute::get('getpayment/{payment}',[RegistrationController::class,"getPay"]);
    FacadesRoute::post('uploadFile/{filename}',[RegistrationController::class,"fileUpload"]);
});
// FacadesRoute::get('allregistrations',[RegistrationController::class,"allregistry"]);
