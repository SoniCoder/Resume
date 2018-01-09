$(document).ready(function () {
    BackgroundCourseAcademic("0");
    specialization(2);
    getacademic();
    ResumeTitle();
    allprojectdetail();
    SearchOtherinfo("0");
    selectelectiveforappend();
    technicalproficiancy();
    getachievement();
    selectlanguagedetail();
    selectlanguage();
    selectelective();
  


    $('#Update').one("click", function () {
        var i = 0;
        jsondata = "";
        jsondata = "[";
        $('.UpdateProject').each(function () {


            i = i + 1;
            jsondata += "{"
            jsondata += "'Id':'" + $(this).attr("id") + "',";
            jsondata += "'Sequence':'" + i + "'},";
            

        });

        jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata += "]";

      //  alert(jsondata);

        updateData(jsondata);

    });


    $(".extracarricular").click(function () {
        $("#ddlAchieve").val("Extra Curricular")
    });

    $(".academic").click(function () {
        $("#ddlAchieve").val("Academics");
    });

    $("#acedmicyear").empty();

    $("#achievementyear").empty();

    var year = new Date().getFullYear();

    $("#achievementyear").append('<option value=""> Select Year</option>');
    $("#acedmicyear").append('<option value=""> Select Year</option>');

    for (k = year; k >= (parseInt(year) - 37) ; k--) {

        $("#acedmicyear").append('<option value="' + k + '">' + k + '</option>');


        $("#achievementyear").append('<option value="' + k + '">' + k + '</option>');
    };

    $("#achievementyear").val("");
    $("#acedmicyear").val("");

    $("#addacad").click(function () {
        $("#academiccourse").val("0");
        $("#acadinst").val("");
        $("#acadbrd").val("");
        $("#Specialisation").val("0");
        $("#acadper").val("");
        $("#acadcgpa").val("");
        $("#acedmicyear").val("0");
    });

    $("#btnacademic").click(function () {
        

        
        jsondata = "";
        jsondata += "'isActive':'1',"
        if ($(".cgpapercent:checked").val() == 'percent') {
            jsondata += "'CGPA':" + $("#acadper").val() + ","
        }
        else {
            jsondata += "'CGPA':" + $("#acadcgpa").val() + ","
        }
        if ($('.specializationclass').val() == 0) {
            alert("Please Select Specialization");
        }
        else {
            $.each($('input[detail="academic"][type="text"],select[detail="academic"]'), function () {
                jsondata += "'" + $(this).attr('name') + "':'" + $(this).val().replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
            });
            jsondata = jsondata.substr(0, jsondata.length - 1);
            jsondata = '{' + jsondata + '}';
            var flag = validationacademic();
         if (flag == 1) {
            

            //var x = ($("#SaveAcademic").context.activeElement.id);

            // if (x == "btnacademic") {


                    saveacademic(jsondata);

                //    return true;
                //}
                //else {

                //    return false;
                //}
                
            }
            else {
                alert("please Fill all Required Fields");
            }
        }
    });



    //$(".Closepopup").click(function () {

    //    $('#SaveAcademic').parsley().reset();

    //   // $("#Addcontact").get(0).reset()
    //});

    $(".Closepopupindus").click(function () {

        $('#SaveIndustrialWork').parsley().reset();
        $('#achievementresponsiblity').Editor('html.set', '');
        // $("#Addcontact").get(0).reset()
    });

    $(".clearall").click(function ()
    {
        debugger;
        $("#ed2").Editor('setText', '');
        $('#achievementresponsiblity').Editor('setText', '');
        $("#projectresponsibilty").Editor('setText', '');
        $("#PublishedJournal").Editor('setText', '');
        $("#ShortDescription").Editor('setText', '');
        $("#EnterDetails").Editor('setText', '');
        $("#achievementyear").val("");
        $("#acedmicyear").val("");
        ResumeTitle();
        
    });
    $('.acdmc').change(function () {
        specialization($(this).val())
        if ($(this).val() == 4) {
            $(".cgpapercent").hide();
            $(".cgparadio").hide();
            $(".cgpa").hide();
            $(".cgpatextbox").hide();
            $(".percnt").show();
        }
        else {
            $(".cgparadio").show();
            $(".cgpapercent").show();
            $(".cgpa").show();
            $(".cgpatextbox").show();
        }
    });

    $(function () {
        $("input[name='Cgpar']").click(function () {
            if ($(this).val() == 'percent') {
                $(".cgpa").hide();
                $(".percnt").show();
                $("#acadcgpa").hide();
                $("#acadper").show();
            }
            if ($(this).val() == 'Scgpa') {
                $(".percnt").hide();
                $(".cgpa").show();
                $("#acadper").hide();
                $("#acadcgpa").show();
            }
        });
    });

    $("#languagesave").click(function () {

        var isread = 0;
        var iswrite = 0;
        var isspoken = 0;
        var isfluent = 0;
        if ($('.languagedetail[name="IsRead"]').prop('checked')) {
            isread = 1;
        }
        if ($('.languagedetail[name="IsSpoken"]').prop('checked')) {
            isspoken = 1;
        }
        if ($('.languagedetail[name="IsWrite"] ').prop('checked')) {
            iswrite = 1;
        }
        if ($('.languagedetail[name="IsFluent"]').prop('checked')) {
            isfluent = 1;
        }
        jsondata = "";
        jsondata += "'LanguageId':'" + $(".otherlanguage").val() + "',"
        jsondata += "'IsRead':'" + isread + "',"
        jsondata += "'IsSpoken':'" + isspoken + "',"
        jsondata += "'IsWrite':'" + iswrite + "',"
        jsondata += "'IsFluent':'" + isfluent + "',"
        jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata = '{' + jsondata + '}';
        savelanguage(jsondata);

    });

    $("#technicalsave").click(function () {

       
        jsondata = "";
        if ($("#technical").val() != "") {
            jsondata += "'TechnicalSkills':'" + $("#technical").val().replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',"
            jsondata = jsondata.substr(0, jsondata.length - 1);
            jsondata = '{' + jsondata + '}';

            //var x = ($("#technicalsave").context.activeElement.id);

            //if (x == "technicalsave") {

                // alert(jsondata);
                savetechnical(jsondata);

            //    return true;
            //}
            //else {

            //    return false;
            //}

          
        }
    });

    $(".addelective").click(function () {
        saveelective($(this).attr("electiveid"));
        ResumeTitle();
    });

    $("#achievementyearupdate").click(function () {

        //document.querySelector("div[contenteditable]").addEventListener("paste", function (e) {

        //    e.preventDefault();
        //    var text = e.clipboardData.getData("text/plain");
        //    document.execCommand("insertHTML", false, text);
        //});
        var AchievementsId = $("#achievementyearupdate").attr("acieveid")
      

        jsondata = "";
        jsondata += "'isActive':'1',"
        jsondata += "'Achievements':'" + $("#EnterDetails").Editor("getText").replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        $.each($('input[detail="Achievement"][type="text"],textarea[detail="Achievement"],select[detail="Achievement"]'), function () {
            jsondata += "'" + $(this).attr('name') + "':'" + $(this).val().replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        });
        jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata = '{' + jsondata + '}';
        updateachievement(jsondata, AchievementsId);
        ResumeTitle();
    });

    $("#Publicationsave").click(function () {
      

        jsondata = "";
      //  var text = $(Data).text();
        jsondata += "'ProjectTypeId':'3',"

        jsondata += "'Responsibility':'" + $("#PublishedJournal").Editor("getText").replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        jsondata += "'Achievements':'" + $("#ShortDescription").Editor("getText").replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";

       
        $.each($('input[detail="Publication"][type="text"]'), function () {
            jsondata += "'" + $(this).attr('name') + "':'" + $(this).val().replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        });
        jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata = '{' + jsondata + '}';

        var flag = validationpublication()
        if (flag == 1) {

            var flag1 = checklastDatepublication()
            if (flag1 == 1) {


                saveindustrlial(jsondata, $(this).attr("savetype"), "Publication");
                ResumeTitle();
                
            }
            else if (flag == 25) {

            }
            else {
                alert("From Date Should Be less then Current Date");
            }
           //// alert(jsondata);
           // saveindustrlial(jsondata, $(this).attr("savetype"), "Publication");

           // return true;
          


        }
    
    else {
            alert("please Fill all Required Fields");
}

     

    });

    $("#PositionOfResponsibilitysave").click(function () {
        var flag2 = 0;
        var flag = 0;
        var flag1 = 0;

        var remarks = 0;
        jsondata = "";
       

           
        if ($('[type="checkbox"][industry="position"]').prop("checked") == true) {
            remarks = 1;
        }
        jsondata += "'ProjectTypeId':'4',"
        jsondata += "'Remark':'" + remarks + "',"
        jsondata += "'Responsibility':'" + $("#ed2").Editor("getText").replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        $.each($('input[detail="PositionOfResponsibility"][type="text"],input[detail="PositionOfResponsibility"][type="number"],textarea[detail="PositionOfResponsibility"],select[detail="PositionOfResponsibility"]'), function () {
            jsondata += "'" + $(this).attr('name') + "':'" + $(this).val().replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        });
        jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata = '{' + jsondata + '}';
        var flag = validationposition()

        if (flag == 1) {

            flag1 = checklastDatepositionofresponsibility()
            if (($('[type="checkbox"][industry="position"]').prop("checked") == true) && (flag1 != 25)) {

                flag1 = 1
            }
            if (flag1 == 1) {
                if ($('[type="checkbox"][industry="position"]').prop("checked") == true) {

                    flag2 = 1
                }
                else {
                    flag2 = comparedatepositionofresponsibility()
                }
                if (flag2 == 1) {

                    saveindustrlial(jsondata, $(this).attr("savetype"), "Position Of Responsibility");
                    ResumeTitle();
                    

                }
                else if (flag1 == 25) {



                }
                else {
                    alert("From Date Should Be less then To Date");
                }

            }
            else if (flag1 == 25) {



            }
            else {
                alert("From Date Should Be less then Current Date");
            }


            // alert(jsondata);

        }
        else {
            alert("please Fill all Required Fields");
        }

    });

    $("#Projectssave").click(function () {
     
        var flag2 = 0;
        var flag = 0;
        var flag1 = 0;
        var remarks = 0;
        jsondata = "";


        if ($('[type="checkbox"][industry="project"]').prop("checked") == true) {
            remarks = 1;
        }
        jsondata += "'ProjectTypeId':'5',"
        jsondata += "'Remark':'" + remarks + "',"
        jsondata += "'Responsibility':'" + $("#projectresponsibilty").Editor("getText").replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        $.each($('input[detail="Projects"][type="text"],input[detail="Projects"][type="number"],textarea[detail="Projects"],select[detail="Projects"]'), function () {
            jsondata += "'" + $(this).attr('name') + "':'" + $(this).val().replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        });
        jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata = '{' + jsondata + '}';

        var flag = validationproject()
        if (flag == 1) {
            

                flag1 = checklastDateproject()
                if (($('[type="checkbox"][industry="project"]').prop("checked") == true ) && (flag1 !=25)) {

                    flag1 = 1
                }
                if (flag1 == 1) {
                    if ($('[type="checkbox"][industry="project"]').prop("checked") == true) {

                        flag2 = 1
                    }
                    else {
                        flag2 = comparedateproject()
                    }
                    if (flag2 == 1) {
                       
                        saveindustrlial(jsondata, $(this).attr("savetype"), "Projects Details");
                        ResumeTitle();

                    }
                    else if (flag1 == 25) {



                    }
                    else {
                        alert("From Date Should Be less then To Date");
                    }
         
                }
                else if (flag1 = 25) {



                }
                else {
                    alert("From Date Should Be less then Current Date");
                }

           // alert(jsondata);
            
        }
        else {
            alert("please Fill all Required Fields");
        }
       
    });

  

    $("#industrialworksave").click(function () {
        var flag2 = 0;
        var flag = 0;
        var flag1 = 0;
        debugger;
        jsondata = "";
        var remarks = 0;
        debugger;
 


        debugger;
        if ($('[type="checkbox"][industry="industrialtraining"]').prop("checked") == true) {
            remarks = 1;
        }
        debugger;
        jsondata += "'ProjectTypeId':'1',"
        jsondata += "'Remark':'" + remarks + "',"
        
      

        jsondata += "'Responsibility':'" + $("#achievementresponsiblity").Editor("getText").replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
       

      //  jsondata += "'Responsibility':'" + $("#achievementresponsiblity").Editor("getText").replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";

        $.each($('input[detail="industry"][type="text"]'), function () {
            jsondata += "'" + $(this).attr('name') + "':'" + $(this).val().replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        });
        jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata = '{' + jsondata + '}';

        var flag = validationindustry()
        if (flag == 1) {
        
            var flag1 = checklastDateindustrial()
            if (($('[type="checkbox"][industry="industrialtraining"]').prop("checked") == true) && (flag1 != 25)) {

                flag1 = 1
            }
            if (flag1 == 1) {
                if ($('[type="checkbox"][industry="industrialtraining"]').prop("checked") == true) {

                    flag2 = 1
                }
                else {
                    var flag2 = comparedateindustry()
                }

                if (flag2 == 1) {

                   
                        saveindustrlial(jsondata, $(this).attr("savetype"), "Industrial Work Experience/Summer Internship");
                    }

              
                else if (flag1 == 25) {



                }
                else {
                    alert("From Date Should Be less then To Date");
                }
            }
            else if (flag1 == 25) {
            }

            else {
                alert("From Date Should Be less then Current Date");
            }

            //alert(jsondata);
            //saveindustrlial(jsondata, $(this).attr("savetype"), "Industrial Work Experience/Summer Internship");

            //return true;
        }
        else {
            alert("please Fill all Required Fields");
        }
        
    });

    $('.saveachieve').click(function () {
        $("#achievementyearsave").show();
        $("#achievementyearupdate").hide();

    });

    $(".plusclass").click(function () {
        $("#industrialworksave").attr("savetype", "0")
        $("#Projectssave").attr("savetype", "0")
        $("#PositionOfResponsibilitysave").attr("savetype", "0")
        $("#Publicationsave").attr("savetype", "0")
    });   

    $(".clearall").click(function () {
        $.each($('input[type="text"],input[type="number"],textarea'), function () {
            $(this).val("");
        });
        //$("#ed").text("");
        //$("#achievementresponsiblity").Editor("setText", "");
        //$("#projectresponsibilty").Editor("setText", "");
        //$("#PublishedJournal").Editor("setText", "");
        //$("#ShortDescription").Editor("setText", "");
        //$("#EnterDetails").Editor("setText", "");
        ResumeTitle();
    });

    $("#achievementyearsave").click(function () {

     
        jsondata = "";


        jsondata += "'isActive':'1',"
        jsondata += "'Achievements':'" + $("#EnterDetails").Editor("getText").replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        $.each($('input[detail="Achievement"][type="text"],input[detail="Achievement"][type="number"],textarea[detail="Achievement"],select[detail="Achievement"]'), function () {
            jsondata += "'" + $(this).attr('name') + "':'" + $(this).val().replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "',";
        });
        jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata = '{' + jsondata + '}';

        var flag = validationachievement()
        if (flag == 1) {

     
            saveachievement(jsondata)
        }
         
      
        
        else {
            alert("please Fill all Required Fields");
        }



          
    });

    $(".resumetitlebtn").click(function () {
        jsondata = "";
        jsondata += "{";
        jsondata += "'ResumeTitle':'" + $("#resumetitle").val().replace(/'/g, "&apos;").replace(/"/g, "&Double;").replace(/</g, "&lt;").replace(/>/g, "&tg;").replace(/\\/g, "&quot;") + "'";
        jsondata += "}";  
        updateresumename(jsondata);
        ResumeTitle();
    });

    $(".resumedownloadbtn").click(function () {

        var Id = $(this).attr("studentid");
        var ResumeId = $(this).attr("resumeid");

       ViewResume(Id, ResumeId);

       // window.location.replace("ViewResume.aspx?StudentId=" + $(this).attr("studentid") + "&ResumeId=" + $(this).attr("resumeid"));
    });

});



function updateData(data) {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/updateSequence",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{ jsondata: "' + encodeURIComponent(data) + '"}',
        dataType: "json",
        success: function (response) {
            debugger;

            alert("Resume Sequence has been updated successfully.");

            window.location = self.location;

        }
    });
}

function ViewResume(Id, ResumeId) {
    debugger;
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/EDIT",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{UserId: "' + Id + '",ResumeId: "' + ResumeId + '"}',
        dataType: "json",
        success: function (response) {

            var sParsedJson = jQuery.parseJSON(response.d);
            {

                window.location.replace("ViewResume.aspx?StudentId=" + sParsedJson[0].encrypteduid + "&ResumeId=" + sParsedJson[0].encryptedResumeId);


            }
        }


    });
}
function updateresumename(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{jsonvalue: "' + encodeURIComponent(jsonvalue) + '" }',
        url: "AddNewResume.aspx/updateresumename",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            alert(sParsedJson[0].message)
        }
    });
}

function BackgroundCourseAcademic(id) {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/BackgroundCourseAcademic",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{company: "' + encodeURIComponent(id) + '" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $("#academiccourse").empty();
                $("#academiccourse").append('<option value="0">Select Course</option>');
                $("#academiccourse").html('<option value="2">X</option>');
                $("#academiccourse").append('<option value="4">XII</option>');
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            $("#academiccourse").empty();
            $("#academiccourse").append('<option value="0">Select Course</option>');
            $("#academiccourse").append('<option value="2">X</option>');
            $("#academiccourse").append('<option value="4">XII</option>');
            for (var i = 0; i < sParsedJson.length; i++) {
                $("#academiccourse").append('<option value="' + sParsedJson[i].AcademicCourseId + '">' + sParsedJson[i].ShortCode + '</option>')
            }
        }
    });
};

function specialization(id) {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/specialization",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{back: "' + id + '" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $("#Specialisation").empty();
                $("#Specialisation").html('<option value="0">Select Specialization</option>')
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            $("#Specialisation").empty();
            $("#Specialisation").html('<option value="0">Select Academic Course</option>')
            for (var i = 0; i < sParsedJson.length; i++) {
                $("#Specialisation").append('<option value="' + sParsedJson[i].AcademicSpecializationId + '">' + sParsedJson[i].AcademicSpecialization + '</option>')
            }
        }
    });
};

function saveacademic(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{jsonvalue: "' + encodeURIComponent(jsonvalue) + '" }',
        url: "AddNewResume.aspx/saveacademic",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            alert(sParsedJson[0].message);
            getacademic();
            $('#SaveAcademic').parsley().reset();
            $('#divadd').modal('hide');

        }
    });

};

function getacademic() {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/academicdetailget",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{}',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $("#action").empty()
                $("#acedmicbody").empty();
                return false;
            }
            $("#acedmicbody").empty();
            var sParsedJson = jQuery.parseJSON(response.d);
            tbodyclone = $("#acadlist");
            for (var i = 0; i < sParsedJson.length; i++) {
                var tr1 = tbodyclone.clone(true, true);
                tr1.find("#crs").text(sParsedJson[i].AcademicCourse);
                tr1.find("#year").text(sParsedJson[i].CompletionYear);
                tr1.find("#inst").text(sParsedJson[i].Institute);
                tr1.find("#brd").text(sParsedJson[i].Board);
                tr1.find("#cgpa").text(sParsedJson[i].CGPA);
                tr1.find("#spclsn").text(sParsedJson[i].AcademicSpecialization);

                if (sParsedJson[i].ResumeVerify == '1') {

                    //tr1.find("#EditP").empty()
                    //tr1.find("#deletebtn").remove()
                    // ("#addacad").remove()
                    $("#addacad").remove()

                }
                else {

                    tr1.find("#action").append('<a href="#" class="editacedmic fa fa-edit text-primary m-l-5" style="font-size: 1.5em" ADID1="' + sParsedJson[i].AcademicDetailId + '"></a>');
                    tr1.find("#action").append('<a href="#" class="deleteacedmic fa fa-trash text-danger m-l-20" style="font-size: 1.5em" ADID2="' + sParsedJson[i].AcademicDetailId + '"></a>');
                    //("#addacad").add()
                }

              


                $("#acedmicbody").append(tr1);
            }
            ResumeTitle();
            $(".deleteacedmic").click(function () {
                var r = confirm("Are you sure you want to Delete?");
                if (r == true) {
                    deleteacedmic($(this).attr("ADID2"));
                }
            });
            $(".editacedmic").click(function () {
                $("#divadd").modal("show");
                getacademicdetail($(this).attr("ADID1"));
            });
        }
    });
};

function deleteacedmic(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/deleteacedmic",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,

        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            getacademic();
        }
    });

};

function getacademicdetail(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/getacademic",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            $("#academiccourse").val(sParsedJson[0].CourseId)
            $('[type="text"][ name="Institute"][ detail="academic"]').val(sParsedJson[0].Institute);
            $('[type="text"][ name="Board"][ detail="academic"]').val(sParsedJson[0].Board);
            if (sParsedJson[0].CourseId == 4) {
                $(".cgparadio").hide();
                $(".cgpapercent").hide();
                $(".cgpa").hide();
                $(".percnt").show();
                $('input[type="text"][ name="CGPA"]').val(sParsedJson[0].CGPA);
            }
            else {
                $(".cgparadio").show();
                $(".cgpapercent").show();
                if (sParsedJson[0].CGPA <= 10) {
                    $(".cgparadio").show();
                    $(".cgpa").show();
                    $(".percnt").hide();
                    $('.cgpapercent[value="percent"]').removeAttr("checked");
                    $('.cgpapercent[value="Scgpa"]').attr("checked", "Checked");
                    $('[type="text"][ name="CGPA"]').val(sParsedJson[0].CGPA);
                }
                else
                    if (sParsedJson[0].CGPA > 10) {
                        $('.cgpapercent[value="Scgpa"]').removeAttr("checked");
                        $('.cgpapercent[value="percent"]').attr("checked", "Checked");
                        $(".cgpa").hide();
                        $(".percnt").show();
                        $('[type="text"][ name="CGPA"]').val(sParsedJson[0].CGPA);
                    }
            }
            $('.compoyear').val(sParsedJson[0].CompletionYear);
            specialization(parseInt(sParsedJson[0].CourseId));
            $('[name="SpecialisationId"][detail="academic"]').val(sParsedJson[0].SpecialisationId);
        }
    });
};

function ResumeTitle() {
    debugger;
    $.ajax({
      
        type: "POST",
        url: "AddNewResume.aspx/ResumeTitle",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{}',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            for (var i = 0; i < sParsedJson.length; i++) {
                $("#resumetitle").val(sParsedJson[0].ResumeTitle);
                $("#resumetitle").attr("resumeid", sParsedJson[0].ResumeId);
                $("#downres").attr("resumeid", sParsedJson[0].ResumeId);
                $("#downres").attr("resumeid", sParsedJson[0].ResumeId);
                $("#downres").attr("studentid", sParsedJson[0].StudentId);

                if (sParsedJson[0].Verify == "true")
                {
                    $("#addacad").remove()
                    

                }
            }
        }
    });
};

function validationacademic() {
    var flag = 1;
    $('[type="text"][detail="academic"]').each(function () {
        if ($(this).val() == "") {
            flag = 0;
        }
    });
    return flag;
};

function validationacademic() {
    var flag = 1;
    $('[detail="academic"]').each(function () {

        if ($(this).val() == "") {
            flag = 0

        }

    });




    return flag;
}
//function validationacademic() {
//    var flag = 1;
//    $('[detail="academic"][id="acadcgpa"][id="acadper"]').each(function () {
//        if ($(this).val() == "") {
//            flag = 0
//        }
//    });
//    return flag;
//};

function SearchOtherinfo(id) {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/SearchOtherinfo",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{company: "' + encodeURIComponent(id) + '" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            $("#dob").text(sParsedJson[0].DateOfBirth);
            $("#address").text(sParsedJson[0].Address.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
            $("#nationality").text(sParsedJson[0].Nationality);
            $("#personalemail").text(sParsedJson[0].PersonalEmailId.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
        }
    });
}

function deleteproject(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/deleteproject",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            allprojectdetail();
        }
    });

};

function getMonthNameFromNumber(MonthNumber) {
    var sMonthName = ""
    switch (MonthNumber) {
        case 1:
            sMonthName = "Jan";
            break;
        case 2:
            sMonthName = "Feb";
            break;
        case 3:
            sMonthName = "Mar";
            break;
        case 4:
            sMonthName = "Apr";
            break;
        case 5:
            sMonthName = "May";
            break;
        case 6:
            sMonthName = "Jun";
            break;
        case 7:
            sMonthName = "Jul";
            break;
        case 8:
            sMonthName = "Aug";
            break;
        case 9:
            sMonthName = "Sep";
            break;
        case 10:
            sMonthName = "Oct";
            break;
        case 11:
            sMonthName = "Nov";
            break;
        case 12:
            sMonthName = "Dec";
            break;
    }
    return sMonthName;
};

function selectelectiveforappend() {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/selectelectiveforappend",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{back: "0" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $("#delelective").empty();
                $("#Electiveouterbody").empty();
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            tbodyclone = $("#electivetr");
            $("#Electiveouterbody").empty();
            $("#delelective").empty();
            for (var i = 0; i < sParsedJson.length; i++) {
                var tr1 = tbodyclone.clone(true, true);
                tr1.find("#electivesno").text(i + 1);
                tr1.find("#electivename").text(sParsedJson[i].Elective.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
                tr1.find("#delelective").empty();
                tr1.find("#delelective").append('<a href="#" class="DeleteElective fa fa-trash text-danger m-l-20" id="delete1" style="font-size: 1.5em" StudElecId="' + sParsedJson[i].StudentElectiveId + '"></a>');
                $("#Electiveouterbody").append(tr1);
            }
            $(".DeleteElective").click(function () {
                var r = confirm("Are you sure you want to Delete?");
                if (r == true) {
                    deleteelective($(this).attr("StudElecId"));
                }
            });
        }
    });
};

function deleteelective(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/deleteelective",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            selectelectiveforappend();
        }
    });
};

function technicalproficiancy() {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/technicalproficiancy",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{back: "0" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $("#technicalbody").empty();
                $("#deletetech").empty()
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            tbodyclone = $("#technicaltr");
            $("#technicalbody").empty();
            $("#deletetech").empty()
            for (var i = 0; i < sParsedJson.length; i++) {
                var tr1 = tbodyclone.clone(true, true);
                tr1.find("#skill").html(sParsedJson[i].TechnicalSkills.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\").replace(/\n/g, '<br/>'));
                tr1.find("#deletetech").empty();
                tr1.find("#deletetech").append('<a href="#" class="deletetechnical fa fa-trash text-danger m-l-20" id="delete1" style="font-size: 1.5em" TechId="' + sParsedJson[i].ID + '"></a>');
                $("#technicalbody").append(tr1);
            }
            $(".deletetechnical").click(function () {
                var r = confirm("Are you sure you want to Delete?");
                if (r == true) {
                    deletetechnical($(this).attr("TechId"));
                }                
            });
        }
    });
};

function deletetechnical(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/deletetechnical",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            technicalproficiancy();
        }
    });
};

function getachievement() {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/getachievement",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{back: "0" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $("#acaction").empty();
                $("#achievementbody").empty();
                $("#extrabody").empty();
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            tbodyclone = $("#achievementtr");
            $("#achievementbody").empty();
            $("#extrabody").empty()
            $("#acaction").empty();
            for (var i = 0; i < sParsedJson.length; i++) {
                var tr1 = tbodyclone.clone(true, true);
                tr1.find("#achievementandaward").html(sParsedJson[i].Achievements.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
                if (sParsedJson[i].Year != 0) {
                    tr1.find("#YEAR").text(sParsedJson[i].Year);
                }
                else {
                    tr1.find("#YEAR").text("");
                }
                tr1.find("#acaction").empty();
                tr1.find("#acaction").append('<a href="#" class="editachieve fa fa-edit text-primary m-l-5" id="acedit" style="font-size: 1.5em" AcId="' + sParsedJson[i].AchievementsId + '"></a>');
                tr1.find("#acaction").append('<a href="#" class="deleteachieve fa fa-trash text-danger m-l-20" id="acdelete" style="font-size: 1.5em" AcId="' + sParsedJson[i].AchievementsId + '"></a>');
                if (sParsedJson[i].AchievementType == "Extra Curricular") {
                    tr1.find("#AchievementType").html(sParsedJson[i].AchievementType);
                    $("#extrabody").append(tr1);
                }
                else {
                    tr1.find("#AchievementType").html(sParsedJson[i].AchievementType);
                    $("#achievementbody").append(tr1);
                }
            }
            $(".deleteachieve").click(function () {
                deleteachieve($(this).attr("AcId"))
            });
            $('.editachieve').click(function () {
                debugger;
                $("#divachievement").modal("show");
                $("#achievementyearsave").hide();
                $("#achievementyearupdate").show();
                getAchievements($(this).attr("AcId"));

                
            });
        }
    });
};



function deleteachieve(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/deleteachieve",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            getachievement()
        }
    });
};

function getAchievements(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/getAchievements",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            $("#ddlAchieve").val(sParsedJson[0].AchievementType);
            $("#achievementyear").val(sParsedJson[0].Year);
            $('#EnterDetails').Editor('setText', sParsedJson[0].Achievements.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
            $("#achievementyearupdate").attr("AcieveId", sParsedJson[0].AchievementsId);
        }
    });
};

function selectlanguagedetail() {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/selectlanguagedetail",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{back: "0" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $("#languagedetailbody").empty()
                $("#deletelanguagetd").empty()
                $("#read").empty()
                $("#spoken").empty()
                $("#write").empty()
                $("#fluency").empty()
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            tbodyclone = $("#languagedetailtr");
            $("#read").empty()
            $("#spoken").empty()
            $("#write").empty()
            $("#fluency").empty()
            $("#languagedetailbody").empty()
            $("#deletelanguagetd").empty()
            for (var i = 0; i < sParsedJson.length; i++) {
                var tr1 = tbodyclone.clone(true, true);
                tr1.find("#languagename").text(sParsedJson[i].Language);
                if (sParsedJson[i].IsRead == 1) {
                    tr1.find("#read").empty()
                    tr1.find("#read").append('<i class="fa fa-check text-success"></i>')
                }
                else {
                    tr1.find("#read").empty()
                    tr1.find("#read").append('<i class="fa fa-times text-danger">')
                }
                if (sParsedJson[i].IsSpoken == 1) {
                    tr1.find("#spoken").empty()
                    tr1.find("#spoken").append('<i class="fa fa-check text-success"></i>')
                }
                else {
                    tr1.find("#spoken").empty()
                    tr1.find("#spoken").append('<i class="fa fa-times text-danger">')
                }
                if (sParsedJson[i].IsWrite == 1) {
                    tr1.find("#write").empty()
                    tr1.find("#write").append('<i class="fa fa-check text-success"></i>')
                }
                else {
                    tr1.find("#write").empty()
                    tr1.find("#write").append('<i class="fa fa-times text-danger">')
                }
                if (sParsedJson[i].IsFluent == 1) {
                    tr1.find("#fluency").empty()
                    tr1.find("#fluency").append('<i class="fa fa-check text-success"></i>')
                }
                else {
                    tr1.find("#fluency").empty()
                    tr1.find("#fluency").append('<i class="fa fa-times redtext-danger">')
                }
                tr1.find("#deletelanguagetd").empty()
                tr1.find("#deletelanguagetd").append('<a href="#" class="deletelanguageofstudent fa fa-trash text-danger m-l-20" id="acdelete" style="font-size: 1.5em"  LangId="' + sParsedJson[i].StudentLanguageId + '"></a>');
                $("#languagedetailbody").append(tr1);
            }
            $(".deletelanguageofstudent").click(function () {
                var r = confirm("Are you sure you want to Delete?");
                if (r == true) {
                    deletelanguage($(this).attr("LangId"));
                }
            });
        }
    });
};

function deletelanguage(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/deletelanguage",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            selectlanguagedetail();
        }
    });
};

function savelanguage(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{jsonvalue: "' + encodeURIComponent(jsonvalue) + '" }',
        url: "AddNewResume.aspx/savelanguage",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,

        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            alert("Language Added Successfully");
            selectlanguagedetail();
            selectlanguage();
            ResumeTitle();

        }
    });
};

function savetechnical(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{jsonvalue: "' + encodeURIComponent(jsonvalue) + '" }',
        url: "AddNewResume.aspx/savetechnical",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            alert("Technical Proficiency Added Successfully");
            $.each($('input[type="text"],input[type="number"],textarea'), function () {
                $(this).val("");
            });
            technicalproficiancy();
            $('#TP').modal('hide');
            ResumeTitle();
        }
    });

};

function selectelective() {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/selectelective",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{back: "0" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $("#electivebody").empty();
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            tbodyclone = $("#electivepopup");
            $("#electivebody").empty();
            for (var i = 0; i < sParsedJson.length; i++) {
                var tr1 = tbodyclone.clone(true, true);
                tr1.find("#electivenamepopup").text(sParsedJson[i].Elective);
                tr1.find("#addelectivepopup").html('<a href="#" data-toggle="modal" role="button" electiveid="' + sParsedJson[i].ElectiveId + '" title="Add Elective" class="addelective"><i class="fa fa-plus " style="color: rgba(24, 110, 216, 0.96);font-size: 1.5em;"></i></a>');
                $("#electivebody").append(tr1);
            }
        }
    });
};

function saveelective(jsonvalue) {

    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/saveelective",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,

        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            alert("Elective Added Successfully");
            selectelectiveforappend();
            ResumeTitle();
        }
    });

};

function selectlanguage() {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/selectlanguage",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{back: "0" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $(".otherlanguage").empty();
                $(".otherlanguage").html('<option value="0">Select Language</option>')
                return false;
            }

            var sParsedJson = jQuery.parseJSON(response.d);
            $(".otherlanguage").empty();
            $(".otherlanguage").html('<option value="0">Select Language</option>')
            for (var i = 0; i < sParsedJson.length; i++) {
                $(".otherlanguage").append('<option value="' + sParsedJson[i].LanguageId + '">' + sParsedJson[i].Language + '</option>')
            }
        }
    });
};

function updateachievement(jsondata, AchievementsId) {
    $.ajax({
        type: "POST",
        data: '{jsondata: "' + encodeURIComponent(jsondata) + '",AchievementsId: "' + encodeURIComponent(AchievementsId) + '" }',
        url: "AddNewResume.aspx/updateachievement",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,

        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            alert("Achievements and Awards/Extra Curricular Activities  Updated Successfully");
            getachievement();
        }
    });
};

function editallprojectdetailsindustry(jsonvalue) {
    debugger;
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/editallprojectdetails",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            debugger;
            $('[type="checkbox"][industry="industrialtraining"]').prop("checked", false)
            var sParsedJson = jQuery.parseJSON(response.d);
            $('[type="text"][ name="CompanyName"][ detail="industry"]').val(sParsedJson[0].CompanyName.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
            //$('[type="text"][ name="Designation"][ detail="industry"]').val(sParsedJson[0].Designation.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"))
            $("#achievementresponsiblity").Editor("setText", sParsedJson[0].Responsibility.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
            $('[type="text"][ name="DateFrom"][ detail="industry"]').val(sParsedJson[0].DateFrom);
            $('[type="text"][ name="DateTo"][ detail="industry"]').val(sParsedJson[0].DateTo);
            $('[type="checkbox"][industry="industrialtraining"][value="' + sParsedJson[0].Remark + '"]').prop("checked", true);
            $(".projectall").attr("savetype", sParsedJson[0].Id);
           

        }
    });
};

function editallprojectdetailspublication(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/editallprojectdetails",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            //alert(sParsedJson);
            debugger;

            var title = sParsedJson[0].CompanyName;
            var Responsibility = sParsedJson[0].Responsibility;
            var Achievements = sParsedJson[0].Achievements;
            var DateFrom = sParsedJson[0].DateFrom;
            var Id = sParsedJson[0].Id;

            $('input[type="text"][ name="CompanyName"][detail="Publication"]').val(title.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));

            //$(this).data("editor").html(text);

            $("#PublishedJournal").Editor("setText",Responsibility.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
            $("#ShortDescription").Editor("setText", Achievements.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
            $('input[type="text"][ name="DateFrom"][detail="Publication"]').val(DateFrom);
            $(".projectall").attr("savetype", Id);
        }
    });
};

function editallprojectdetailspostion(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/editallprojectdetails",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            $('[type="checkbox"][industry="position"]').prop("checked", false)
            var sParsedJson = jQuery.parseJSON(response.d);
            debugger;
            $('[type="text"][ name="CompanyName"][ detail="PositionOfResponsibility"]').val(sParsedJson[0].CompanyName.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"))
            $("#ed2").Editor("setText", sParsedJson[0].Responsibility.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
            $('[type="text"][ name="DateFrom"][ detail="PositionOfResponsibility"]').val(sParsedJson[0].DateFrom)
            $('[type="text"][ name="DateTo"][ detail="PositionOfResponsibility"]').val(sParsedJson[0].DateTo)
            $('[type="checkbox"][industry="position"][value="' + sParsedJson[0].Remark + '"]').prop("checked", true)
            $(".projectall").attr("savetype", sParsedJson[0].Id)
        }
    });
};

function editallprojectdetailsproject(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/editallprojectdetails",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            $('[type="checkbox"][industry="project"]').prop("checked", false)
            var sParsedJson = jQuery.parseJSON(response.d);
            debugger;
            $('[type="text"][ name="CompanyName"][ detail="Projects"]').val(sParsedJson[0].CompanyName.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"))
            $("#projectresponsibilty").Editor("setText", sParsedJson[0].Responsibility.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"));
            $('[type="text"][ name="DateFrom"][ detail="Projects"]').val(sParsedJson[0].DateFrom)
            $('[type="checkbox"][industry="project"][value="' + sParsedJson[0].Remark + '"]').prop("checked", true)
            $('[type="text"][ name="DateTo"][ detail="Projects"]').val(sParsedJson[0].DateTo)
            $(".projectall").attr("savetype", sParsedJson[0].Id)
        }
    });

}

function getproject(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{back: "' + jsonvalue + '" }',
        url: "AddNewResume.aspx/getproject",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            $("#academiccourse").val(sParsedJson[0].CourseId)
            debugger;
            $('[type="text"][ name="Institute"]').val(sParsedJson[0].Institute.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"))
            $('[type="text"][ name="Board"]').val(sParsedJson[0].Board.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"))
            $('[type="text"][ name="CGPA"]').val(sParsedJson[0].CGPA.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\"))
            $('[type="text"][ name="CompletionYear"]').val(sParsedJson[0].CompletionYear);
        }
    });
};

function studentdetails() {
    $.ajax({
        type: "POST",
        data: '{back: "0" }',
        url: "AddNewResume.aspx/studentdetails",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            $("#studentname").text(sParsedJson[0].Studentname);
        }
    });
};

//function validationacademic() {
//    var flag = 1;
//    $('[type="text"][detail="academic"]').each(function () {
//        if ($(this).val() == "") {
//            flag = 0;
//        }
//    });
//    return flag;
//};

//function validationacademic() {
//    var flag = 1;
//    $('[detail="academic"]').each(function () {

//        if ($(this).val() == "") {
//            flag = 0;
//        }
//    });
//    return flag;
//};

function validationpublication() {
    var flag = 1;
    $('[detail="Publication"][textbox="publicationtextbox"]').each(function () {
        if ($(this).val() == "") {
            flag = 0;
        }
    });
    if ($("#ShortDescription").Editor('getText') == "") {
        flag = 0;
    }

    if ($("#PublishedJournal").Editor('getText') == "") {
        flag = 0;
    }
    return flag;
};

function validationachievement() {
    var flag = 1;
    $('[detail="Achievement"][achievemenettextbos="achieve"]').each(function () {
        if ($(this).val() == "") {
            flag = 0;
        }
        if ($("#EnterDetails").Editor('getText') == "") {
            flag = 0;
        }
    });
    return flag;
};

function validationposition() {
    var flag = 1;
    $('[detail="PositionOfResponsibility"]').each(function () {
        if ($(this).val() == "") {
            flag = 0;
        }
    });
    if ($("#ed2").Editor('getText') == "") {
        flag = 0;
    }
    return flag;
};

function validationproject() {
    var flag = 1;
    $('[detail="Projects"][project="project" ][textbox="projecttextbox"]').each(function () {

        if ($(this).val() == "") {
            flag = 0
        }
    });
    if ($("#projectresponsibilty").Editor('getText') == "") {
        flag = 0
    }
    return flag;
};

function validationindustry() {
    var flag = 1;
    $('[indus="indus"][textbox="achievetext"]').each(function () {
        if ($(this).val() == "") {
            flag = 0
        }
    });
    if ($("#achievementresponsiblity").Editor('getText') == "") {
        flag = 0
    }
    return flag;
};

function validationposition() {
    var flag = 1;
    $('[detail="PositionOfResponsibility"][textbox="textbox"][position="position"]').each(function () {
        if ($(this).val() == "") {
            flag = 0
        }
    });

    if ($("#ed2").Editor('getText') == "") {
        flag = 0
    }
    return flag;
};

//function checklastDateindustrial() {
//    var flag = 1;
//    var EnteredDate = $('[name="DateFrom"][detail="industry"]').val(); 
//    if (EnteredDate != null) {
//        var month = EnteredDate.substring(0, 2);
//        var date = EnteredDate.substring(3, 5);
//        var year = EnteredDate.substring(6, 12);
//        if ($.isNumeric(month) == false || $.isNumeric(date) == false || $.isNumeric(year) == false) {
//            alert("Please Enter Correct Date Format")
//            flag = 25;
//        }
//        else {
//            var myDate = new Date(year, month - 1, date);
//            var today = new Date();
//            var month12 = today.getMonth() + 1;
//            var day12 = today.getDate();
//            var output = today.getFullYear()
//            var myDate1 = new Date(output, month12 - 1, day12);
//            if (myDate <= myDate1) {
//            }
//            else {
//                flag = 10;
//            }
//        }
//        return flag;
//    }
//};

//function comparedateindustry() {
//    var flag = 1;
//    var EnteredDate = $('[name="DateFrom"][detail="industry"]').val(); 
//    var LastDate = $('[name="DateTo"][detail="industry"]').val();
//    if (EnteredDate != null) {
//        var month = EnteredDate.substring(0, 2);
//        var date = EnteredDate.substring(3, 5);
//        var year = EnteredDate.substring(6, 12);
//        var myDate = new Date(year, month - 1, date);
//        var month12 = LastDate.substring(0, 2);
//        var date12 = LastDate.substring(3, 5);
//        var year12 = LastDate.substring(6, 12);
//        var myDate = new Date(year, month - 1, date);
//        var myDate1 = new Date(year12, month12 - 1, date12);
//        if (myDate <= myDate1) {
//        }
//        else {
//            flag = 10;
//        }
//        return flag;
//    }
//};

function checklastDatepublication() {
    var flag = 1;
    var EnteredDate = $('[name="DateFrom"][detail="Publication"]').val(); 
    if (EnteredDate != null) {
        var month = EnteredDate.substring(0, 2);
        var date = EnteredDate.substring(3, 5);
        var year = EnteredDate.substring(6, 12);
        if ($.isNumeric(month) == false || $.isNumeric(date) == false || $.isNumeric(year) == false) {
            alert("Please Enter Correct Date Format")
            flag = 25;
        }
        else {
            var myDate = new Date(year, month - 1, date);
            var today = new Date();
            var month12 = today.getMonth() + 1;
            var day12 = today.getDate();
            var output = today.getFullYear()
            var myDate1 = new Date(output, month12 - 1, day12);
            if (myDate <= myDate1) {
            }
            else {
                flag = 10;
            }
        }
        return flag;
    }
};

function checklastDatepositionofresponsibility() {
    var flag = 1;
    var EnteredDate = $('[name="DateFrom"][detail="PositionOfResponsibility"]').val(); 
    if (EnteredDate != null) {
        var month = EnteredDate.substring(0, 2);
        var date = EnteredDate.substring(3, 5);
        var year = EnteredDate.substring(6, 12);
        if ($.isNumeric(month) == false || $.isNumeric(date) == false || $.isNumeric(year) == false) {
            alert("Please Enter Correct Date Format")
            flag = 25;
        }
        else {
            var myDate = new Date(year, month - 1, date);
            var today = new Date();
            var month12 = today.getMonth() + 1;
            var day12 = today.getDate();
            var output = today.getFullYear();
            var myDate1 = new Date(output, month12 - 1, day12);
            if (myDate <= myDate1) {
            }
            else {
                flag = 10;
            }
        }
        return flag;
    }
};

function ClearAll() {
    document.getElementsByName('CompanyName').innerHTML = ''
};

function comparedatepositionofresponsibility() {
    var flag = 1;
    var EnteredDate = $('[name="DateFrom"][detail="PositionOfResponsibility"]').val(); 
    var LastDate = $('[name="DateTo"][detail="PositionOfResponsibility"]').val();
    if (EnteredDate != null) {
        var month = EnteredDate.substring(0, 2);
        var date = EnteredDate.substring(3, 5);
        var year = EnteredDate.substring(6, 12);
        if ($.isNumeric(month) == false || $.isNumeric(date) == false || $.isNumeric(year) == false) {
            alert("Please Enter Correct Date Format")
            flag = 25;
        }
        else {
            var myDate = new Date(year, month - 1, date);
            var month12 = LastDate.substring(0, 2);
            var date12 = LastDate.substring(3, 5);
            var year12 = LastDate.substring(6, 12);
            var myDate = new Date(year, month - 1, date);
            var myDate1 = new Date(year12, month12 - 1, date12);
            if (myDate <= myDate1) {
            }
            else {
                flag = 10;
            }
        }
        return flag;
    }
};

function checklastDateproject() {
    var flag = 1;
    var EnteredDate = $('[name="DateFrom"][detail="Projects"]').val(); 
    if (EnteredDate != null) {
        var month = EnteredDate.substring(0, 2);
        var date = EnteredDate.substring(3, 5);
        var year = EnteredDate.substring(6, 12);
        if ($.isNumeric(month) == false || $.isNumeric(date) == false || $.isNumeric(year) == false) {
            alert("Please Enter Correct Date Format")
            flag = 25;
        }
        else {
            var myDate = new Date(year, month - 1, date);
            var today = new Date();
            var month12 = today.getMonth() + 1;
            var day12 = today.getDate();

            var output = today.getFullYear()
            var myDate1 = new Date(output, month12 - 1, day12);

            if (myDate <= myDate1) {

            }
            else {
                flag = 10;
            }
        }
        return flag;
    }
};

function saveindustrlial(jsonvalue, savetype, type) {
    debugger
    $.ajax({
        type: "POST",
        data: '{jsonvalue: "' + encodeURIComponent(jsonvalue) + '" ,savetype: "' + encodeURIComponent(savetype) + '"}',
        url: "AddNewResume.aspx/saveindustrlial",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            debugger;
            var sParsedJson = jQuery.parseJSON(response.d);
            alert(type + " Added Successfully");

         

            $.each($('input[type="text"],input[type="number"],textarea'), function () {
                $(this).val("");
            });
           // $("#ed").text("");
           
            $("#ed2").Editor('getText', '');
            $('#achievementresponsiblity').Editor('getText', '');
            $("#projectresponsibilty").Editor('getText', '');
            $("#PublishedJournal").Editor('getText', '');
            $("#ShortDescription").Editor('getText', '');
            $("#EnterDetails").Editor('getText', '');

            //$('#SaveIndustrialWork').parsley().destroy();
            //$('input[detail="industry"][type="text"]').removeAttr('data-parsley-required');
           
            ////$('input[detail="industry"][type="text"]').removeAttr('data-parsley-validate-if-empty');
            //$('input[detail="industry"][type="text"]').removeAttr('parsley-errors-list');
            //$('input[detail="industry"][type="text"]').removeAttr('data-parsley-required');
            //$('input[detail="industry"][type="text"]').removeClass('parsley-success');
            //$('input[detail="industry"][type="text"]').removeClass('parsley-errors-list');
         //   $('SaveIndustrialWork').parsley();

            //$("#SaveIndustrialWork")[0].reset();
             
            //$("#SaveIndustrialWork").get(0).reset();

             allprojectdetail();
             $('#IWEM').modal('hide');
             $('#publication').modal('hide');
             $('#POR').modal('hide');
             $('#project').modal('hide');
             ResumeTitle();

            
        }
    });
};

function allprojectdetail() {
    $.ajax({
        type: "POST",
        url: "AddNewResume.aspx/allprojectdetail",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{back: "0" }',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {
                $("#indusworkexpbody").empty();
                $("#positionbody").empty();
                $("#projectbody").empty();
                $("#Publicationbody").empty();
                return false;
            }
            var sParsedJson = jQuery.parseJSON(response.d);
            tbodyclone = $("#trcommon");
            $("#indusworkexpbody").empty();
            $("#positionbody").empty();
            $("#projectbody").empty();
            $("#Publicationbody").empty();
            for (var i = 0; i < sParsedJson.length; i++) {

              
                var tr1 = tbodyclone.clone(true, true);

                // tr1.find(".UpdateProject").attr("id", sParsedJson[i].Id);

                tr1.append('<td style="display:none" id="' + sParsedJson[i].Id + '" Class="UpdateProject" ></td>');
                tr1.find("#company").html(sParsedJson[i].CompanyName.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\").replace(/\\n/g, "\n").replace(/\n/g, '<br/>'))
                tr1.find("#responsibility").html(sParsedJson[i].Responsibility.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\").replace(/\\n/g, "\n").replace(/\n/g, '<br/>'))
                if (sParsedJson[i].ProjectTypeId == "3") {
                    var month = sParsedJson[i].DateFrom.substring(0, 2);
                    var date = sParsedJson[i].DateFrom.substring(3, 5);
                    var year = sParsedJson[i].DateFrom.substring(6, 12);
                    var monthname = getMonthNameFromNumber(parseInt(month));
                    tr1.find("#duration").text(date + " " + monthname + " " + year);
                    tr1.find("#Responsibility").text("Published Journal");
                    tr1.find("#Achievement").text("Short Description");
                }

                //else if (sParsedJson[i].ProjectTypeId == "1") {

                //    tr1.find("#Designation").html(sParsedJson[i].Designation.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\").replace(/\\n/g, "\n").replace(/\n/g, '<br/>'))

                //}
                else if (sParsedJson[i].ProjectTypeId == "4" || sParsedJson[i].ProjectTypeId == "1" || sParsedJson[i].ProjectTypeId == "5") {
                    tr1.find("#Responsibility").text("Responsibilities And Achievements");
                    tr1.find("#Achievement").text("");
                    var month = sParsedJson[i].DateFrom.substring(0, 2);
                    var monthname = getMonthNameFromNumber(parseInt(month))
                    var date = sParsedJson[i].DateFrom.substring(3, 5);
                    var year = sParsedJson[i].DateFrom.substring(6, 12);
                    if (sParsedJson[i].Remark == 1) {
                        tr1.find("#duration").text(date + " " + monthname + " " + year + " - Till Present");
                    }
                    else {
                        var month1 = sParsedJson[i].DateTo.substring(0, 2);
                        var monthname = getMonthNameFromNumber(parseInt(month))
                        var monthname1 = getMonthNameFromNumber(parseInt(month1))
                        var date1 = sParsedJson[i].DateTo.substring(3, 5);
                        var year1 = sParsedJson[i].DateTo.substring(6, 12);
                        tr1.find("#duration").text(date + " " + monthname + " " + year + " - " + date1 + " " + monthname1 + " " + year1);
                    }
                }
                else {
                    tr1.find("#Responsibility").text("Responsibility");
                    tr1.find("#Achievement").text("Achievement");
                    var month = sParsedJson[i].DateFrom.substring(0, 2);
                    var date = sParsedJson[i].DateFrom.substring(3, 5);
                    var year = sParsedJson[i].DateFrom.substring(6, 12);
                    if (sParsedJson[i].Remark == 1) {
                        tr1.find("#duration").text(date + " " + monthname + " " + year + " - Till Present");
                    }
                    else {
                        var month1 = sParsedJson[i].DateTo.substring(0, 2);
                        var monthname = getMonthNameFromNumber(parseInt(month))
                        var monthname1 = getMonthNameFromNumber(parseInt(month1))
                        var date1 = sParsedJson[i].DateTo.substring(3, 5);
                        var year1 = sParsedJson[i].DateTo.substring(6, 12);
                        tr1.find("#duration").text(date + " " + monthname + " " + year + " - " + date1 + " " + monthname1 + " " + year1);
                    }
                }
                tr1.find(".deleteproject").attr("ADID1", sParsedJson[i].Id);
                tr1.find(".editproject").attr("ADID1", sParsedJson[i].Id);
                if (sParsedJson[i].ProjectTypeId == "1") {
                    tr1.find(".editproject").addClass("indusworkexpbodyclass");
                    $("#indusworkexpbody").append(tr1);
                }
                if (sParsedJson[i].ProjectTypeId == "3") 
                {
                    debugger;
                    tr1.find("#achievement").html(sParsedJson[i].Achievements.replace(/&apos;/g, "'").replace(/&Double;/g, '"').replace(/&lt;/g, "<").replace(/&tg;/g, ">").replace(/&quot;/g, "\\").replace(/\\n/g, "\n").replace(/\n/g, '<br/>'))
                    tr1.find(".editproject").addClass("Publicationclass");
                    tr1.find(".editproject").removeClass("indusworkexpbodyclass");
                    $("#Publicationbody").append(tr1);

                }
                if (sParsedJson[i].ProjectTypeId == "4") {
                    tr1.find(".editproject").addClass("positionclass");
                    tr1.find(".editproject").removeClass("indusworkexpbodyclass");
                    tr1.find(".editproject").removeClass("Publicationclass");
                    $("#positionbody").append(tr1);
                }
                if (sParsedJson[i].ProjectTypeId == "5") {
                    tr1.find(".editproject").addClass("projectclass");
                    tr1.find(".editproject").removeClass("indusworkexpbodyclass");
                    tr1.find(".editproject").removeClass("positionclass");
                    tr1.find(".editproject").removeClass("Publicationclass");
                    tr1.find(".editproject").removeClass("positionclass");
                    $("#projectbody").append(tr1);
                }
            }
            $("#industrialworksave").attr("savetype", "0")
            $("#Projectssave").attr("savetype", "0")
            $("#PositionOfResponsibilitysave").attr("savetype", "0")
            $("#Publicationsave").attr("savetype", "0")
            $(".deleteproject").click(function () {
                var r = confirm("Are you sure you want to Delete?");
                if (r == true) {
                    deleteproject($(this).attr("ADID1"));
                }
            });
            $(".indusworkexpbodyclass").click(function () {
                debugger;
                $("#IWEM").modal("show");
               // $('#SaveIndustrialWork').parsley().reset();
               

                editallprojectdetailsindustry($(this).attr("ADID1"))
               
            });
            $(".Publicationclass").click(function () {
                $("#publication").modal("show");
                editallprojectdetailspublication($(this).attr("ADID1"))
            });
            $(".positionclass").click(function () {
                $("#POR").modal("show");
                editallprojectdetailspostion($(this).attr("ADID1"))
            });
            $(".projectclass").click(function () {
                $("#project").modal("show");
                editallprojectdetailsproject($(this).attr("ADID1"))
            });
        }
    });
};

function comparedateproject() {
    var flag = 1;
    var EnteredDate = $('[name="DateFrom"][detail="Projects"]').val();
    var LastDate = $('[name="DateTo"][detail="Projects"]').val();
    if (EnteredDate != null) {
        var month = EnteredDate.substring(0, 2);
        var date = EnteredDate.substring(3, 5);
        var year = EnteredDate.substring(6, 12);
        var myDate = new Date(year, month - 1, date);
        var month12 = LastDate.substring(0, 2);
        var date12 = LastDate.substring(3, 5);
        var year12 = LastDate.substring(6, 12);
        var myDate = new Date(year, month - 1, date);
        var myDate1 = new Date(year12, month12 - 1, date12);
        if (myDate <= myDate1) {
        }
        else {
            flag = 10;
        }
        return flag;
    }
};

function saveachievement(jsonvalue) {
    $.ajax({
        type: "POST",
        data: '{jsonvalue: "' + encodeURIComponent(jsonvalue) + '" }',
        url: "AddNewResume.aspx/saveachievement",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        dataType: "json",
        success: function (response) {
            var sParsedJson = jQuery.parseJSON(response.d);
            alert("Details  Added Successfully");
            $.each($('input[type="text"]'), function () {
                $(this).val("");
            });
            $("#EnterDetails").Editor("setText","");
            getachievement();
            getExtraCurricular(); Language
            $('#divachievement').modal('hide');
            ResumeTitle();
        }
    });

};


function checklastDateindustrial() {

    var flag = 1;
    var EnteredDate = $('[name="DateFrom"][detail="industry"]').val(); // For JQuery
    if (EnteredDate != null) {
        var month = EnteredDate.substring(0, 2);
        var date = EnteredDate.substring(3, 5);
        var year = EnteredDate.substring(6, 12);
        if ($.isNumeric(month) == false || $.isNumeric(date) == false || $.isNumeric(year) == false) {
            alert("Please Enter Correct Date Format")
            flag = 25;


        }
        else {

            var myDate = new Date(year, month - 1, date);
            var today = new Date();
            var month12 = today.getMonth() + 1;
            var day12 = today.getDate();

            var output = today.getFullYear()
            var myDate1 = new Date(output, month12 - 1, day12);

            if (myDate <= myDate1) {

            }
            else {
                flag = 10;
            }
        }
        return flag;
    }
}



function comparedateindustry() {

    var flag = 1;
    var EnteredDate = $('[name="DateFrom"][detail="industry"]').val(); // For JQuery
    var LastDate = $('[name="DateTo"][detail="industry"]').val();
    if (EnteredDate != null) {
        var month = EnteredDate.substring(0, 2);
        var date = EnteredDate.substring(3, 5);
        var year = EnteredDate.substring(6, 12);


        var myDate = new Date(year, month - 1, date);
        var month12 = LastDate.substring(0, 2);
        var date12 = LastDate.substring(3, 5);
        var year12 = LastDate.substring(6, 12);


        var myDate = new Date(year, month - 1, date);


        var myDate1 = new Date(year12, month12 - 1, date12);

        if (myDate <= myDate1) {

        }
        else {
            flag = 10;
        }
        return flag;
    }
}
