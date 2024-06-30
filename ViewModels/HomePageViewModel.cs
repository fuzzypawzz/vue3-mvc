using System.Text.Json;
using TypeGen.Core.TypeAnnotations;

namespace vue3_mvc.ViewModels;

[ExportTsInterface(OutputDir = "src/models")]
public class HomePageViewModel
{
    public string? Name { get; set; }
    public int? Age { get; set; }

    private static readonly JsonSerializerOptions JsonOptions = new JsonSerializerOptions()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    public string ToJson()
    {
        return JsonSerializer.Serialize(this, JsonOptions);
    }
}