using System.Text.Json;

namespace vue3_mvc.Helpers;

public static class ViteHelper
{
    public static string GetViteAssetPath(string assetName)
    {
        var manifestPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "vite-dist", ".vite", "manifest.json");
        if (File.Exists(manifestPath))
        {
            var json = File.ReadAllText(manifestPath);
            var manifest = JsonSerializer.Deserialize<Dictionary<string, ViteManifestEntry>>(json);
            if (manifest != null && manifest.TryGetValue(assetName, out var entry))
            {
                return $"/vite-dist/{entry.file}";
            }
        }
        
        return null;
    }

    private class ViteManifestEntry
    {
        public string file { get; set; }
    }
}
