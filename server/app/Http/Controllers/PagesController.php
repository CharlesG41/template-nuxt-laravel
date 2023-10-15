<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class PagesController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(trans('index'));
    }

    public function contact(): JsonResponse
    {
        return response()->json(['title' => 'Contact', 'text' => 'contactez-nous!']);
    }
}
