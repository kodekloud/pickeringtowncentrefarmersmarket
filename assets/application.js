function renderGetList(item_template_id,not_empty_section_id,empty_section_id, stores,option){
    var item_list = [];
    var count = 1;
    var item_template_html = $(item_template_id).html();
    Mustache.parse(item_template_html);

    $.each( stores , function( key, val ) {
        if (count % 2 == 0){
            val.textColor = "green";
        }
        count+=1;
        var str = (val.body).trim();

        if(str == "" || str == null){
            val.optionSlug = '';
        }else{
            val.optionSlug = '../' + option + '/' + val.slug;
        }
    
        var item_rendered = Mustache.render(item_template_html,val);
        item_list.push(item_rendered);
    });
    if (option == 'vendors'){
        item_list.sort(sortByName);
    }
    if(stores.length > 0){
        $(not_empty_section_id).show();
        $(empty_section_id).hide();
        $(not_empty_section_id).html(item_list.join(''));
    }else{
        $(not_empty_section_id).hide();
        $(empty_section_id).show();
    }
}

function sortByName(a, b){
    var aName = a.name;
    var bName = b.name;

    console.log(a);
    return ((aName > bName) ? -1 : ((aName < bName) ? 1 : 0));  
}
