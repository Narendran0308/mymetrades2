from PIL import Image
import os

# Change to the script directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# List of PNG files to convert
images_to_convert = ['image.png', 'session.png', 'book.png']

for png_file in images_to_convert:
    if os.path.exists(png_file):
        try:
            # Open the PNG image
            img = Image.open(png_file)
            
            # Convert to AVIF
            avif_file = png_file.replace('.png', '.avif')
            img.save(avif_file, 'AVIF', quality=80)
            print(f"✓ Converted {png_file} to {avif_file}")
        except Exception as e:
            print(f"✗ Error converting {png_file}: {e}")
    else:
        print(f"✗ File not found: {png_file}")

print("\nConversion complete!")
