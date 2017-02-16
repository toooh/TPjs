function Person(pName, pFirstname, pAge, pKind, pProfession, pMother, pFather, pBrothers, pSisters, pProfilPicture){
    if(pName===""){//NAME
        this.name;
    }else{
        this.name=pName;
    }
    
    if(pFirstname===undefined || pFirstname==="" || pFirstname===null){//FIRSTNAME
        while(pFirstname===undefined || pFirstname==="" || pFirstname===null){
            this.firstname=prompt("Entrez le prénom");
        }
    }else{
        this.firstname=pFirstname;
    }
    
    if(typeof(pAge)!==Number){//AGE
        this.age;
    }else{
        this.age=pAge;
    }
    
    if(pKind!=="m" && pKind!=="M" && pKind!=="f" && pKind!=="F"){//KIND
        while(pKind!=="m" && pKind!=="M" && pKind!=="f" && pKind!=="F"){
            this.kind=prompt("Entrez le genre de "+this.firstname+" (fFmM)");
        }
    }else{
        this.kind=pKind;
    }
    
    if(pProfession==="" || pProfession===null){//PROFESSION
        this.profession;
    }else{
        this.profession=pProfession;
    }
    
    if(pMother instanceof Person){//MOTHER
        this.mother=pMother;
    }else{
        this.mother;
    }
    
    if(pFather instanceof Person){//FATHER
        this.father=pFather;
    }else{
        this.father;
    }
    
    if(pBrothers instanceof Person){//BROTHERS
        this.brothers=new Array;
        this.brothers.push(pBrothers);
    }else{
        this.brothers=new Array();
    }
    
    if(pSisters instanceof Person){//SISTERS
        this.sisters=new Array;
        this.sisters.push(pSisters);
    }else{
        this.sisters=new Array();
    }
    
    if(pProfilPicture===undefined || pProfilPicture==="" || pProfilPicture===null){//PROFILPIC
        if(this.kind==="f" || this.kind==="F"){
            this.profilPicture="../img/profilPictureFemale.jpg";
        }else if(this.kind==="m" || this.kind==="M"){
            this.profilPicture="../img/profilPictureMale.jpg";
        }
    }
    
    this.attributTab=new Array();//sert d'intermédiaire entre le paramètre et this.paramètre, sans lui un attribut "paramètre" serait créé
    this.addFamilyMember=function(pAttributName, pPerson){//ADD_FAMILY_MEMBER
        this.attributTab.push(pAttributName);
        if(pPerson instanceof Person){
            this.attributTab[attributTab.length-1]=pPerson;
        }
    };
    this.addBrotherOrSister=function(pPerson){//ADD_BROTHER_OR_SISTER
        if(pPerson instanceof Person && isArray(this.brothers)){
            if(pPerson.kind==="m" || pPerson.kind==="M"){
                this.brothers.push(pPerson);
            }else if(pPerson.kind==="f" || pPerson.kind==="F"){
                this.sisters.push(pPerson);
            }
        }
    };
}

debugger;

//pName, pFirstname, pAge, pKind, pProfession, pMother, pFather, pBrothers, pSisters, pProfilPicture
var grandfather1=new Person('Simpson', 'Abraham', 142, 'M', 'retraité', '', '', '', '', '');
var grandfather2=new Person('Flanders', 'Ned Senior', 140, 'M', 'retraité', '', '', '', '', '');
var grandmother1=new Person('Simpson', 'Lucie', 130, 'F', 'retraitée', '', '', '', '', '');
var grandmother2=new Person('Flanders', 'Paulette', 128, 'F', 'retraitée', '', '', '', '', '');

var father=new Person('Simpson', 'Homer', 110, 'M', 'Superviseur technique', grandmother1, grandfather1, '', '', '');
var mother=new Person('Flanders', 'Marge', 100, 'F', 'Agent immobilière', grandmother2, grandfather2, '', '', '');

var daughter=new Person('Simpson', 'Lisa', 80, 'F', 'Présidente des Etats-unis', mother, father, '', '', '');
var husbandOfdaughter=new Person('Van Houten', 'Milhouse', 85, 'M', 'Chauffeur de bus', '', '', '', '', '');
daughter.addFamilyMember('husband', husbandOfdaughter);
husbandOfdaughter.addFamilyMember('wife', daughter);
var daughter2=new Person('Simpson', 'Maggie', 70, 'F', 'PDG', mother, father, '', '', '');
daughter.addBrotherOrSister(daughter2);
daughter2.addBrotherOrSister(daughter);
var husbandOfDaughter2=new Person('Muntz', 'Nelson', 87, 'M', 'Agent de sécurité', '', '', '', '', '');
husbandOfDaughter2.addFamilyMember('wife', daughter2);
daughter2.addFamilyMember('husband', husbandOfDaughter2);

var granddaughter=new Person('Van Houten', 'Margie', 57, 'F', 'DRH', daughter, husbandOfdaughter, '', '', '');
var grandson=new Person('Van Houten', 'Aaron', 55, 'M', 'Comptable', daughter, husbandOfdaughter, '', '', '');
var granddaughter2=new Person('Van Houten', 'Annie', 55, 'F', 'Designer', daughter, husbandOfdaughter, '', '', '');
granddaughter.addBrotherOrSister(grandson);
granddaughter.addBrotherOrSister(granddaughter2);
grandson.addBrotherOrSister(granddaughter);
grandson.addBrotherOrSister(granddaughter2);
granddaughter2.addBrotherOrSister(grandson);
granddaughter2.addBrotherOrSister(granddaughter);

var granddaughterB=new Person('Muntz', 'Sophie', 25, 'F', 'Fleuriste', daughter2, husbandOfDaughter2, '', '', '');
var grandsonB=new Person('Muntz', 'Albert', 22, 'M', 'instituteur', daughter2, husbandOfDaughter2, '', '', '');
var grandsonB2=new Person('Muntz', 'Hubert', 27, 'M', 'Avocat', daughter2, husbandOfDaughter2, '', '', '');
var wifeOfGrandsonB2=new Person('Smith', 'Aline', 26, 'F', 'Paysagiste', '', '', '', '', '');
grandsonB2.addFamilyMember('wife', wifeOfGrandsonB2);
wifeOfGrandsonB2.addFamilyMember('husband', grandsonB2);

//construction du tableau Family
var FamilyTest=new array(grandfather1, grandfather2, grandmother1, grandmother2, father, mother, daughter, husbandOfdaughter, daughter2, husbandOfDaughter2, granddaughter, grandson, granddaughter2, granddaughterB, grandsonB, grandsonB2, wifeOfGrandsonB2);
var Family;
var i=0;
var test=false;
while(i!==FamilyTest.length-1){
    if(FamilyTest[i] instanceof Person){
        test=true;
    }
    i+=1;
}
if(test===true){
    Family=FamilyTest;
}else{
    Family=new Array;
}

document.getElementById('main').innerHTML=grandfather1.firstname;
