import {observable, action, computed} from 'mobx';

export default class DefaultStore {
    @observable selected = {
        WebService: null,
        Endpoint: null,
    };

    @action setSelectedWebService = (webService) => {
        this.selected.WebService = webService
    };

    @action setSelectedEndpoint = (endpoint) => {
        this.selected.Endpoint = endpoint
    };

    @action getSelectedEndpoint = () => {
        console.log(this.selected.Endpoint);
        return this.selected.Endpoint;
    };

    @computed get selectedWebService() {
        console.log(this.selected.WebService);
        return this.selected.WebService
    };
};
