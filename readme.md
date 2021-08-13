Forked from https://github.com/laat/documentation-repo-example with the intention of
setting up a minimal OpenAPI Specification of
https://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks

This response is based on this configuration

```
                endpoints.MapHealthChecks("/health", new HealthCheckOptions()
                {
                    Predicate = _ => true,
                    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse,
                    ResultStatusCodes =
                            {
                                [HealthStatus.Healthy] = StatusCodes.Status200OK,
                                [HealthStatus.Degraded] = StatusCodes.Status200OK,
                                [HealthStatus.Unhealthy] = StatusCodes.Status200OK
                            }
                });


```

# documentation

for a live reload server run

```
npm start
```

lint:

```
npm run lint
```

format all files with prettier:

```
npm run format
```
