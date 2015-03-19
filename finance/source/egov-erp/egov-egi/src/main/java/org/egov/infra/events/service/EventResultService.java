package org.egov.infra.events.service;

import org.egov.infra.events.entity.EventResult;
import org.egov.infra.events.repository.EventResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EventResultService {

	protected @Autowired EventResultRepository eventResultRepository;

	@Transactional
	public void persistEventResult(final EventResult eventResult) {
		this.eventResultRepository.save(eventResult);
	}
}