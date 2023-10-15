<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class CommonsController extends Controller
{
    public function commons(): JsonResponse
    {
        return response()->json(trans('commons'));
    }
}
