class apiresponse{
    constructor(statuscode,data,message="success"){
        this.message=message;
        this.data=data;
        this.statuscode=statuscode;
        this.success=true;

    }
}

export {apiresponse}