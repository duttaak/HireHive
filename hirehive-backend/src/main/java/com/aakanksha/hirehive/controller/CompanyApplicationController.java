package com.aakanksha.hirehive.controller;
import jakarta.validation.Valid;
import java.util.List;
import com.aakanksha.hirehive.entity.CompanyApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.aakanksha.hirehive.service.CompanyApplicationService;

@RequestMapping("/applications")
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CompanyApplicationController {

    private final CompanyApplicationService service;

    public CompanyApplicationController(CompanyApplicationService service) {
        this.service = service;
    }
    @PostMapping
    public CompanyApplication addApplication(
            @Valid @RequestBody CompanyApplication application) {

        return service.saveApplication(application);

    }
    @GetMapping
    public List<CompanyApplication>getApplications()
    {
        return service.getApplications();
    }
    @GetMapping("/{id}")
    public CompanyApplication getApplicationById(@PathVariable Long id)
    {
        return service.getApplicationById(id);
    }
    @PutMapping("/{id}")
    public CompanyApplication updateApplication(@PathVariable Long id, @Valid @RequestBody CompanyApplication application){
        return service.updateApplication(id, application);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long id)
    {
        service.deleteApplication(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping ("/company/{companyName}")
    public List<CompanyApplication> getApplicationsByCompanyName(@PathVariable String companyName)
    {
        return service.getApplicationsByCompanyName(companyName);
    }
}