using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

using ArtistApi.Services; 
using ArtistApi.Models; 
using Microsoft.Extensions.Options; 


namespace ArtistApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ArtistApi", Version = "v1" });
            });

            services.Configure<ArtistDatabaseSettings>(
                Configuration.GetSection(nameof(ArtistDatabaseSettings))
            );

            services.AddSingleton<IArtistDatabaseSettings>(
                sp => sp.GetRequiredService<IOptions<ArtistDatabaseSettings>>().Value
            );

            services.AddSingleton<ArtistService>();
            services.AddSingleton<AlbumService>();

            services.AddCors(
                options => {
                    options.AddPolicy("AllowAny", 
                        builder => builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                    );
                }
            );

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ArtistApi v1"));
            }

            // Bruk index.html i root 
            DefaultFilesOptions newOptions = new DefaultFilesOptions();
            newOptions.DefaultFileNames.Append("index.html");
            app.UseDefaultFiles(newOptions);

            app.UseStaticFiles(); 

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("AllowAny");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
