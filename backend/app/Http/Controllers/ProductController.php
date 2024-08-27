<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\ProductStoreRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage; //php artisan storage:link = php artisan storage:link = http://127.0.0.1:8000/storage/1.jpg
 
class ProductController extends Controller
{
    public function index()
    {
       // All Product
       $products = Product::all();
      
       // Return Json Response
       return response()->json([
          'products' => $products
       ],200);
    }
  
    public function store(ProductStoreRequest $request)
    {
        try {
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
      
            // Create Product
            Product::create([
                'name' => $request->name,
                'image' => $imageName,
                'description' => $request->description,
                'company' => $request->company,
                'formula' => $request->formula,
                'expiryDate' => $request->expiryDate,
                'quantity' => $request->quantity,
                'medType' => $request->medType,
                'storageConditions' => $request->storageConditions,
                'precautions' => $request->precautions,
                'price' => $request->price
            ]);
      
            // Save Image in Storage folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));
      
            // Return Json Response
            return response()->json([
                'message' => "Product successfully created."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }
  
    public function show($id)
    {
       // Product Detail 
       $product = Product::find($id);
       if(!$product){
         return response()->json([
            'message'=>'Product Not Found.'
         ],404);
       }
      
       // Return Json Response
       return response()->json([
          'product' => $product
       ],200);
    }

    public function search(Request $request)
    {
        $searchTerm = $request->input('searchTerm');
        
        // Perform your search logic here
        $results = Product::where('name', 'like', '%' . $searchTerm . '%')
            ->orWhere('formula', 'like', '%' . $searchTerm . '%')
            ->get();
        
        return response()->json($results);
    }
   





    public function update(ProductStoreRequest $request, $id)
    {
        try {
            // Find product
            $product = Product::find($id);
            if(!$product){
              return response()->json([
                'message'=>'Product Not Found.'
              ],404);
            }
      
            //echo "request : $request->image";
            $product->name = $request->name;
            $product->description = $request->description;
            $product->company = $request->company;
            $product->formula = $request->formula;
            $product->expiryDate = $request->expiryDate;
            $product->quantity = $request->quantity;
            $product->medType = $request->medType;
            $product->storageConditions = $request->storageConditions;
            $product->precautions = $request->precautions;
            $product->price = $request->price;
      
            if($request->image) {
 
                // Public storage
                $storage = Storage::disk('public');
      
                // Old iamge delete
                if($storage->exists($product->image))
                    $storage->delete($product->image);
      
                // Image name
                $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
                $product->image = $imageName;
      
                // Image save in public folder
                $storage->put($imageName, file_get_contents($request->image));
            }
      
            // Update Product
            $product->save();
      
            // Return Json Response
            return response()->json([
                'message' => "Product successfully updated."
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
        $product = Product::find($id);
        if(!$product){
          return response()->json([
             'message'=>'Product Not Found.'
          ],404);
        }
      
        // Public storage
        $storage = Storage::disk('public');
      
        // Iamge delete
        if($storage->exists($product->image))
            $storage->delete($product->image);
      
        // Delete Product
        $product->delete();
      
        // Return Json Response
        return response()->json([
            'message' => "Product successfully deleted."
        ],200);
    }
}