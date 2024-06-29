using System.Text.Json;

namespace vue3_mvc.ViewModels;

public class Test
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