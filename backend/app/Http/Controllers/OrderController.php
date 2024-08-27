<?php

namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Models\Orders;
//use App\Http\Requests\ProductStoreRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    public function index()
    {
       // All Product
       $orders = Orders::all();
      
       // Return Json Response
       return response()->json([
          'orders' => $orders
       ],200);
    }

    public function store(Request $request)
    {
        try {
          
            // Create Product
            Orders::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'home_address' => $request->home_address,
                'contact_number' => $request->contact_number,
                'email' => $request->email,
                'quantity' => $request->quantity,
                'orderedProduct' => $request->orderedProduct
            ]);
      
           
            // Return Json Response
            return response()->json([
                'message' => "order successfully created."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }


    public function destroy($id)
    {
        // Detail 
        $order = Orders::find($id);
        if(!$order){
          return response()->json([
             'message'=>'order Not Found.'
          ],404);
        }
        // Delete Product
        $order->delete();
      
        // Return Json Response
        return response()->json([
            'message' => "order successfully deleted."
        ],200);
    }
    public function getCount()
    {
        $count = Product::count();
        return response()->json(['count' => $count]);
    }
   
    // public function store(Request $request)
    // {
    //     // Validate the incoming request data
    //     $validatedData = $request->validate([
    //         'first_name' => 'required|string',
    //         'last_name' => 'required|string',
    //         'home_address' => 'required|string',
    //         'contact_number' => 'required|string',
    //         'email' => 'required|email',
    //         // Add validation rules for additional fields as necessary
    //     ]);

    //     // Create a new order
    //     $order = Orders::create($validatedData);

    //     // Return a response with the created order
    //     return response()->json([
    //         'order' => $order,
    //         'message' => 'Order placed successfully!',
    //     ]);
    // }
}
