package org.wms.web.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
//import org.wms.service.BirthRegistrationService;
import org.wms.service.ProjectMasterService;
import org.wms.service.SchemeMasterService;
import org.wms.util.ResponseInfoFactory;
import org.wms.web.models.Project;
import org.wms.web.models.RequestInfoWrapper;
import org.wms.web.models.Scheme;
//import org.wms.web.models.SchemeCreationRequest;
//import org.wms.web.models.SchemeCreationResponse;
import org.wms.web.models.SchemeCreationApplication;
//import org.wms.web.models.SchemeResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

//import jakarta.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequest;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ToString
@Controller
@RequestMapping("/wms-services")
public class ProjectApiController {
	
	private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    private ProjectMasterService projectMasterService;

    @Autowired
    private ResponseInfoFactory responseInfoFactory;

    @Autowired
    public ProjectApiController(ObjectMapper objectMapper, HttpServletRequest request, ProjectMasterService projectMasterService) {
    	this.objectMapper = objectMapper;
        this.request = request;
        this.projectMasterService = projectMasterService;
    }

    @RequestMapping(value="/v1/project/_create", method = RequestMethod.POST)
    public ResponseEntity<String> v1WmsCreatePost(@RequestBody Project projectRequest) {
        
        boolean isSaved = projectMasterService.createProjectRequest(projectRequest);

        if (isSaved) {
            return ResponseEntity.ok("Project created successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create the project.");
        }
    }

    @RequestMapping(value="/v1/project/_search", method = RequestMethod.POST)
    public ResponseEntity<List<Project>> v1ProjectSearchPost(@RequestBody String searchCriteria) {
        //List<Scheme> applications = schemeMasterService.searchSchemeApplications(keyword, schemeCreationSearchCriteria);
        List<Project> projects = projectMasterService.searchProjectApplications(searchCriteria);

        if (!projects.isEmpty()) {
            return ResponseEntity.ok(projects);
        } else {
            return ResponseEntity.notFound().build();
        }
        
        
    }

    @RequestMapping(value="/v1/project/_update", method = RequestMethod.POST)
    public ResponseEntity<String> v1ProjectUpdatePost(@RequestBody Project project) {
        //List<SchemeCreationApplication> applications = schemeMasterService.updateBtApplication(birthRegistrationRequest);
        
    	try {
            // Step 1: Data Validation
            // You can perform validation on the request data here
            // ...

            // Step 2: Authentication and Authorization
            // Check user credentials and permissions
            // ...

            // Step 3: Fetch Existing Scheme
            Project existingProject = projectMasterService.getProjectById(project.getProjectId());

            if (existingProject == null) {
                // Return error response as the scheme with the provided ID doesn't exist
                return new ResponseEntity<>("Project not found", HttpStatus.NOT_FOUND);
            }

            // Step 4: Merge Changes
            // Update only the relevant fields from the request to the existing scheme
            existingProject.setProjectNameEn(project.getProjectNameEn());
            existingProject.setProjectNameReg(project.getProjectNameReg());
            existingProject.setProjectDescription(project.getProjectDescription());
            // ...

            // Step 5: Data Persistence
            projectMasterService.updateProjectMaster(existingProject);

            // Step 6: Response
            return new ResponseEntity<>("Project updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            // Return error response in case of any exceptions or errors during the update process
            return new ResponseEntity<>("Error updating project: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

	/*
	 * @RequestMapping(value="/v1/scheme/_view", method = RequestMethod.GET) public
	 * ResponseEntity<Scheme> v1RegistrationUpdatePost(@RequestParam Long id) {
	 * 
	 * Scheme scheme = schemeMasterService.viewScheme(id);
	 * 
	 * if (scheme != null) { return ResponseEntity.ok(scheme); } else { return
	 * ResponseEntity.notFound().build(); }
	 * 
	 * }
	 */
    
    @RequestMapping(value = "/v1/project/_view", method = RequestMethod.GET)
    public ResponseEntity<List<Project>> v1ProjectViewGet() {
        List<Project> projects = projectMasterService.viewProject();

        if (!projects.isEmpty()) {
            return ResponseEntity.ok(projects);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	
	

}
