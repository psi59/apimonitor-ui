import { observable, action } from 'mobx';

export default class DefaultStore {
    @observable selectedWebService = null;
    @observable selectedEndpoint = null;

    @action setSelectedWebService = (webService) => {
        this.selectedWebService = webService
    };

    @action setSelectedEndpoint = (endpoint) => {
        this.selectedEndpoint = endpoint
    };
};
