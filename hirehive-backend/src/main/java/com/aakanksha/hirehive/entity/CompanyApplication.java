package com.aakanksha.hirehive.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

import java.time.LocalDate;

@Entity
public class CompanyApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String companyName;
    @NotBlank
    private String role;
    @Positive
    private Double packageOffered;
    @NotBlank
    private String applicationStatus;
    private LocalDate oaDate;
    private LocalDate interviewDate;
    @Column(length = 1000)
    private String notes;
    private String logoUrl;
    public CompanyApplication() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Double getPackageOffered() {
        return packageOffered;
    }

    public void setPackageOffered(Double packageOffered) {
        this.packageOffered = packageOffered;
    }

    public String getApplicationStatus() {
        return applicationStatus;
    }

    public void setApplicationStatus(String applicationStatus) {
        this.applicationStatus = applicationStatus;
    }

    public LocalDate getOaDate() {
        return oaDate;
    }

    public void setOaDate(LocalDate oaDate) {
        this.oaDate = oaDate;
    }

    public LocalDate getInterviewDate() {
        return interviewDate;
    }

    public void setInterviewDate(LocalDate interviewDate) {
        this.interviewDate = interviewDate;
    }

    public String getNotes(){return notes;}

    public void setNotes(String notes){this.notes=notes;}

}
