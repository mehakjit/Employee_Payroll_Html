class EmployeePayrollData{
    constructor(...params){
        this.name = params[0];
        this.profilePic = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.note = params[6];
    }

    get id(){return this._id;}
    set id(id){
        this._id = id;
    }

    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp();
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect!";
        }

    get profilePic(){return this._profilePic;}
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender(){return this._gender;}
    set gender(gender){
        this._gender = gender;
    }

    get department(){return this._department;}
    set department(department){
        this._department = department;
    }

    get salary(){return this._salary;}
    set salary(salary){
        this._salary = salary;
    }

    get note(){return this._note;}
    set note(note){
        this._note = note;
    }

    get startDate(){return this._startDate;}
    set startDate(startDate){
        this._startDate = startDate;
    }

    toString(){
        // console.log(this.gender == this.startDate);
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate?"undefined":
                        this.startDate.toLocaleDateString("en-US", options);
        return "id = "+this.id+", name= "+this.name+", profilePic= "+this.profilePic+", gender= "+this.gender+", department= "+this.department+", salary= "+this.salary
        +", note= "+this.note+", startDate= "+empDate;
    }
}