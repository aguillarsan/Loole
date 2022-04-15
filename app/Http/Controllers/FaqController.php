<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Faq;
class FaqController extends Controller
{
    
    public function getFaqs()
    {
        $faqs = Faq::get();
        return $faqs;
    }

   
}
