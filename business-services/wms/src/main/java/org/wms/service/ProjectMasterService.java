package org.wms.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.egov.common.contract.request.RequestInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.wms.config.SchemeConfiguration;
import org.wms.producer.Producer;
import org.wms.repository.ProjectMasterRepository;
import org.wms.repository.SchemeMasterRepository;
import org.wms.web.models.Project;
import org.wms.web.models.Scheme;
import org.wms.web.models.SchemeCreationApplication;
//import org.wms.web.models.SchemeCreationRequest;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ProjectMasterService {
	
	//@Autowired
    //private BirthApplicationValidator validator;

    //@Autowired
    //private BirthApplicationEnrichment enrichmentUtil;

    //@Autowired
    //private BirthApplicationValidator birthApplicationValidator;
    //@Autowired
    //private BirthApplicationEnrichment birthApplicationEnrichment;
    @Autowired
    private Producer producer;
    @Autowired
    private SchemeConfiguration configuration;
    @Autowired
    private ProjectMasterRepository projectMasterRepository;
	/*
	 * @Autowired private UserService userService;
	 * 
	 * @Autowired private WorkflowService workflowService;
	 * 
	 * @Autowired private CalculationService calculationService;
	 */

    public boolean createProjectRequest(Project projectRequest) {
        

        // Push the application to the topic for persister to listen and persist
        producer.push(configuration.getCreateTopic(), projectRequest);
        //List<SchemeCreationApplication> request=new ArrayList<>();
        // Return the response back to user
        //return schemeRequest.getBirthRegistrationApplications();
        
        //schemeMasterRepository.save(schemeRequest);
        Project savedProject = projectMasterRepository.save(projectRequest);

        // If the save was successful, the savedScheme will not be null.
        return savedProject != null;
        
        //return savedScheme;
    }

    public List<Project> searchProjectApplications(String keyword) {
        // Fetch applications from database according to the given search criteria
        //List<Scheme> applications = schemeMasterRepository.searchScheme(keyword);
        return projectMasterRepository.searchProject(keyword);
        // If no applications are found matching the given criteria, return an empty list
       
        // Enrich mother and father of applicant objects
		/*
		 * applications.forEach(application -> {
		 * birthApplicationEnrichment.enrichFatherApplicantOnSearch(application);
		 * birthApplicationEnrichment.enrichMotherApplicantOnSearch(application); });
		 */

        

        
    }

    public boolean updateProjectMaster(Project project) {
        // Validate whether the application that is being requested for update indeed exists
    	if (project.getProjectId() == null || project.getProjectId() == 0) {
            // You may choose to throw an exception or handle the error accordingly
            return false;
        }

        // Call the repository method to update the scheme
        return projectMasterRepository.updateProject(project);
    }

	public List<Project> viewProject() {
		List<Project> optionalProject = projectMasterRepository.getAllProjects();

        // If the scheme exists, return it; otherwise, return null.
        return optionalProject;
	}

	public Project getProjectById(Long id) {
		return projectMasterRepository.getProjectById(id);
		
		
	}


}
