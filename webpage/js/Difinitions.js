/*!
 * Ext JS Library 3.2.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */

var countryStore = new Ext.data.SimpleStore({
    autoSave: false,
    fields: ['cId', 'cName'],
    data: [
        // ["BE", "Belgium"], ["BR", "Brazil"], ["BG", "Bulgaria"], ["CA",
        // "Canada"], ["CL", "Chile"], ["CM", "Cameroon"], ["CY", "Cyprus"], ["CZ",
        // "Czech Republic"], ["FI","Finland"],
        // ["FR", "France"], ["DE", "Germany"], ["HU", "Hungary"], ["IE",
        // "Ireland"], ["IL", "Israel"], ["IT", "Italy"], ["LV", "Latvia"], ["LT",
        // "Lithuania"],
        // ["MX", "Mexico"], ["NL", "Netherlands"], ["NZ", "New Zealand"], ["NO",
        // "Norway"], ["PK", "Pakistan"], ["PL", "Poland"], ["RO", "Romania"],
        // ["SK", "Slovakia"], ["SI", "Slovenia"], ["ES", "Spain"], ["LK", "Sri
        // Lanka"], ["SE", "Sweden"], ["CH", "Switzerland"], ["GB", "United
        // Kingdom"]
        ["AA", "Aruba"], ["AC", "Antigua And Barbuda"],
        ["AF", "Afghanistan"], ["AG", "Algeria"],
        ["AI", "Ascension Island"], ["AJ", "Azerbaijan"],
        ["AL", "Albania"], ["AM", "Armenia"], ["AN", "Andorra"],
        ["AO", "Angola "], ["AQ", "American Samoa"],
        ["AR", "Argentina"], ["AS", "Australia"],
        ["AT", "Ashmore And Cartier Islands"], ["AU", "Austria"],
        ["AV", "Anguilla"],
        ["AX", "Antigua, St. Kitts, Nevis, Barbuda"],
        ["AY", "Antarctica"], ["AZ", "Azores "], ["BA", "Bahrain"],
        ["BB", "Barbados"], ["BC", "Botswana"], ["BD", "Bermuda"],
        ["BE", "Belgium"], ["BF", "Bahamas The"],
        ["BG", "Bangladesh"], ["BH", "Belize "],
        ["BK", "Bosnia And Herzegovina"], ["BL", "Bolivia"],
        ["BM", "Burma"], ["BN", "Benin"], ["BO", "Belarus"],
        ["BP", "Solomon Islands    "], ["BQ", "Navassa Island"],
        ["BR", "Brazil "], ["BS", "Bassas Da India    "],
        ["BT", "Bhutan "], ["BU", "Bulgaria"],
        ["BV", "Bouvet Island "], ["BX", "Brunei "],
        ["BY", "Burundi"], ["BZ", "Belgium And Luxembourg"],
        ["CA", "Canada "], ["CB", "Cambodia"],
        ["CC", "Ceuta And Melilla  "], ["CD", "Chad "],
        ["CE", "Sri Lanka"], ["CF", "Congo"], ["CG", "Zaire"],
        ["CH", "China"], ["CI", "Chile"], ["CJ", "Cayman Islands"],
        ["CK", "Cocos (Keeling) Islands    "],
        ["CL", "Caroline Islands   "], ["CM", "Cameroon"],
        ["CN", "Comoros"], ["CO", "Colombia"],
        ["CP", "Canary Islands"], ["CQ", "Northern Mariana Islands"],
        ["CR", "Coral Sea Islands  "], ["CS", "Costa Rica"],
        ["CT", "Central African Republic   "], ["CU", "Cuba "],
        ["CV", "Cape Verde"], ["CW", "Cook Islands  "],
        ["CY", "Cyprus "], ["CZ", "Canton Island "],
        ["DA", "Denmark"], ["DJ", "Djibouti"], ["DO", "Dominica"],
        ["DQ", "Jarvis Island "], ["DR", "Dominican Republic "],
        ["DY", "Democratic Yemen   "], ["EC", "Ecuador"],
        ["EG", "Egypt"], ["EI", "Ireland"],
        ["EK", "Equatorial Guinea  "], ["EN", "Estonia"],
        ["ER", "Eritrea"], ["ES", "El Salvador"], ["ET", "Ethiopia"],
        ["EU", "Europa Island "], ["EZ", "Czech Republic"],
        ["FG", "French Guiana "], ["FI", "Finland"], ["FJ", "Fiji "],
        ["FK", "Falkland Islands (Islas Malvinas) "],
        ["FM", "Micronesia, Federated States Of   "],
        ["FO", "Faroe Islands "], ["FP", "French Polynesia   "],
        ["FQ", "Baker Island  "], ["FR", "France "],
        ["FS", "French Southern And Antarctic Lands"],
        ["GA", "Gambia  The"], ["GB", "Gabon"], ["GG", "Georgia"],
        ["GH", "Ghana"], ["GI", "Gibraltar"], ["GJ", "Grenada"],
        ["GK", "Guernsey"], ["GL", "Greenland"], ["GM", "Germany"],
        ["GO", "Glorioso Islands   "], ["GP", "Guadeloupe"],
        ["GQ", "Guam "], ["GR", "Greece "], ["GT", "Guatemala"],
        ["GV", "Guinea "], ["GY", "Guyana "], ["GZ", "Gaza Strip"],
        ["HA", "Haiti"], ["HK", "Hong Kong"],
        ["HM", "Heard Island And Mcdonald Islands "],
        ["HO", "Honduras"], ["HQ", "Howland Island"],
        ["HR", "Croatia"], ["HU", "Hungary"], ["IC", "Iceland"],
        ["ID", "Indonesia"], ["IM", "Man  Isle Of  "],
        ["IN", "India"], ["IO", "British Indian Ocean Territory    "],
        ["IP", "Clipperton Island  "], ["IR", "Iran "],
        ["IS", "Israel "], ["IT", "Italy"], ["IV", "Cote D'ivoire "],
        ["IW", "Israel-Jordan Dmz  "], ["IZ", "Iraq "],
        ["JA", "Japan"], ["JE", "Jersey "], ["JM", "Jamaica"],
        ["JN", "Jan Mayen"], ["JO", "Jordan "],
        ["JQ", "Johnston Atoll"], ["JU", "Juan De Nova Island"],
        ["KE", "Kenya"], ["KG", "Kyrgyzstan"],
        ["KN", "Korea, North  "], ["KQ", "Kingman Reef  "],
        ["KR", "Kiribati"], ["KS", "Korea, South  "],
        ["KT", "Christmas Island   "], ["KU", "Kuwait "],
        ["KZ", "Kazakhstan"], ["LA", "Laos "],
        ["LC", "St. Lucia And St. Vincent  "], ["LE", "Lebanon"],
        ["LG", "Latvia "], ["LH", "Lithuania"], ["LI", "Liberia"],
        ["LN", "Southern Line Islands "], ["LO", "Slovakia"],
        ["LQ", "Palmyra Atoll "], ["LS", "Liechtenstein "],
        ["LT", "Lesotho"], ["LU", "Luxembourg"], ["LY", "Libya"],
        ["MA", "Madagascar"], ["MB", "Martinique"], ["MC", "Macau"],
        ["MD", "Moldova"], ["ME", "Madeira"], ["MF", "Mayotte"],
        ["MG", "Mongolia"], ["MH", "Montserrat"], ["MI", "Malawi "],
        ["MK", "Macedonia"], ["ML", "Mali "],
        ["MM", "Burma (Myanmar)    "], ["MN", "Monaco "],
        ["MO", "Morocco"], ["MP", "Mauritius"],
        ["MQ", "Midway Islands"], ["MR", "Mauritania"],
        ["MT", "Malta"], ["MU", "Oman "], ["MV", "Maldives"],
        ["MW", "Montenegro"], ["MX", "Mexico "], ["MY", "Malaysia"],
        ["MZ", "Mozambique"], ["NC", "New Caledonia "],
        ["NE", "Niue "], ["NF", "Norfolk Island"], ["NG", "Niger"],
        ["NH", "Vanuatu"], ["NI", "Nigeria"], ["NL", "Netherlands"],
        ["NO", "Norway "], ["NP", "Nepal"], ["NR", "Nauru"],
        ["NS", "Suriname"], ["NT", "Netherlands Antilles  "],
        ["NU", "Nicaragua"], ["NZ", "New Zealand"],
        ["OW", "Ocea Weather Stations"], ["PA", "Paraguay"],
        ["PC", "Pitcairn Islands   "], ["PE", "Peru "],
        ["PF", "Paracel Islands    "], ["PG", "Spratly Islands    "],
        ["PI", "Phoenix Islands    "], ["PK", "Pakistan"],
        ["PL", "Poland "], ["PM", "Panama "],
        ["PN", "North Pacific Islands "], ["PO", "Portugal"],
        ["PP", "Papua New Guinea   "],
        ["PS", "Palau - Trust Territory Of The Pacific Islands"],
        ["PU", "Guinea-Bissau "], ["PZ", "South Pacific Islands "],
        ["QA", "Qatar"], ["RE", "Reunion And Associated Islands    "],
        ["RM", "Marshall Islands   "], ["RO", "Romania"],
        ["RP", "Philippines"], ["RQ", "Puerto Rico"],
        ["RS", "Russia "], ["RW", "Rwanda "],
        ["SA", "Saudi Arabia  "],
        ["SB", "St. Pierre And Miquelon    "],
        ["SC", "St. Kitts And Nevis"], ["SE", "Seychelles"],
        ["SF", "South Africa  "], ["SG", "Senegal"],
        ["SH", "St. Helena"], ["SI", "Slovenia"],
        ["SK", "Sarawak And Saba   "], ["SL", "Sierra Leone  "],
        ["SM", "San Marino"], ["SN", "Singapore"], ["SO", "Somalia"],
        ["SP", "Spain"], ["SR", "Serbia "], ["SS", "St. Maarten"],
        ["ST", "St. Lucia"], ["SU", "Sudan"], ["SV", "Svalbard"],
        ["SW", "Sweden "],
        ["SX", "South Georgia And The South Sandwich Islands  "],
        ["SY", "Syria"], ["SZ", "Switzerland"],
        ["TC", "United Arab Emirates  "],
        ["TD", "Trinidad And Tobago"], ["TE", "Tromelin Island    "],
        ["TH", "Thailand"], ["TI", "Tajikistan"],
        ["T", "Turks And Caicos Islands   "], ["TL", "Tokelau"],
        ["TN", "Tonga"], ["TO", "Togo "],
        ["TP", "Sao Tome And Principe "], ["TS", "Tunisia"],
        ["TU", "Turkey "], ["TV", "Tuvalu "], ["TW", "Taiwan "],
        ["TX", "Turkmenistan  "], ["TZ", "Tanzania"],
        ["UA", "Former Ussr (Asia) "],
        ["UE", "Former Ussr (Europe)  "], ["UG", "Uganda "],
        ["UK", "United Kingdom"], ["UP", "Ukraine"],
        ["US", "United States "], ["UV", "Burkina Faso  "],
        ["UY", "Uruguay"], ["UZ", "Uzbekistan"],
        ["VC", "St. Vincent And The Grenadines    "],
        ["VE", "Venezuela"], ["VI", "Virgin Islands (British)   "],
        ["VM", "Vietnam"], ["VQ", "Virgin Islands (U.S.) "],
        ["VT", "Vatican City  "], ["WA", "Namibia"],
        ["WE", "West Bank"], ["WF", "Wallis And Futuna  "],
        ["WI", "Western Sahara"], ["WQ", "Wake Island"],
        ["WS", "Western Samoa "], ["WZ", "Swaziland"],
        ["YM", "Yemen"], ["YU", "Yugoslavia (& Former Territory)   "],
        ["YY", "St. Marteen, St. Eustatius, And Saba"],
        ["ZA", "Zambia "], ["ZI", "Zimbabwe"], ["ZM", "Samoa"],
        ["ZZ", "St. Martin And St. Bartholomew"]]
});

var EaListRec = Ext.data.Record.create([{
        name: 'ea_id',
        type: 'string'
    }, {
        name: 'ea_name',
        type: 'string'
    }, {
        name: 'ea_mobile',
        type: 'string'
    }, {
        name: 'ea_active',
        type: 'bool'
    }, {
        name: 'ea_to_prof',
        type: 'string'
    }, {
        name: 'ea_credits',
        type: 'string'
    }, {
        name: 'ea_org',
        type: 'string'
    }, {
        name: 'ea_fname',
        type: 'string'
    }, {
        name: 'ea_lname',
        type: 'string'
    }]);

var EaDDGridRec = Ext.data.Record.create([{
        name: 'ea_id',
        type: 'string'
    }, {
        name: 'ea_name',
        type: 'string'
    }, {
        name: 'ea_active',
        type: 'bool'
    }, {
        name: 'ea_to_prof',
        type: 'string'
    }, {
        name: 'ea_org',
        type: 'string'
    }]);

var NumListSubsRec = Ext.data.Record.create([{
        name: 'ea_id',
        type: 'string'
    }, {
        name: 'ea_name',
        type: 'string'
    }, {
        name: 'ea_acl',
        type: 'int'
    }, {
        name: 'ea_active',
        type: 'bool'
    }, {
        name: 'ea_c_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s' // n/j/Y
    }]);

var SubsRec = Ext.data.Record.create([{
        name: 'ea_id',
        type: 'string'
    }, {
        name: 'ea_name',
        type: 'string'
    }, {
        name: 'ea_acl',
        type: 'int'
    }, {
        name: 'ea_active',
        type: 'bool'
    }, {
        name: 'ea_c_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s' // n/j/Y
    }]);

var NumListRec = Ext.data.Record.create([{
        name: 'nl_id',
        type: 'string'
    }, {
        name: 'nl_name',
        type: 'string'
    }, {
        name: 'nl_size',
        type: 'int'
    }, {
        name: 'nl_type',
        type: 'int'
    }, {
        name: 'nl_active',
        type: 'bool'
    }, {
        name: 'nl_acl',
        type: 'int'
    }, {
        name: 'nl_hide',
        type: 'bool'
    }, {
        name: 'nl_c_by',
        type: 'string'
    }, {
        name: 'nl_c_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s' // n/j/Y
    }]);

var AddressBookRec = Ext.data.Record.create([{
        name: 'name',
        type: 'string'
    }, {
        name: 'number',
        type: 'string'
    }, {
        name: 'other_details',
        type: 'string'
    }]);

var NlDDGridRec = Ext.data.Record.create([{
        name: 'nl_id',
        type: 'string'
    }, {
        name: 'nl_name',
        type: 'string'
    }, {
        name: 'nl_size',
        type: 'int'
    }, {
        name: 'nl_active',
        type: 'bool'
    }, {
        name: 'nl_c_by',
        type: 'string'
    }]);

var EsmeConf = Ext.data.Record.create([{
        name: 'id',
        type: 'string'
    }, {
        name: 'system_id',
        type: 'string'
    }, {
        name: 'password',
        type: 'string'
    }, {
        name: 'system_type',
        type: 'string'
    }, {
        name: 'mode',
        type: 'string'
    }, {
        name: 'ston',
        type: 'string'
    }, {
        name: 'snpi',
        type: 'string'
    }, {
        name: 'addr_range',
        type: 'string'
    }, {
        name: 'bindchk',
        type: 'string'
    }, {
        name: 'host',
        type: 'string'
    }, {
        name: 'ston',
        type: 'string'
    }, {
        name: 'snpi',
        type: 'string'
    }, {
        name: 'bindchk',
        type: 'string'
    }, {
        name: 'port',
        type: 'string'
    }, {
        name: 'interface_version',
        type: 'string'
    }, {
        name: 'throttle',
        type: 'string'
    }, {
        name: 'src_behaviour',
        type: 'string'
    }, {
        name: 'src_para',
        type: 'string'
    }, {
        name: 'couple_mc',
        type: 'string'
    }, {
        name: 'c_by',
        type: 'string'
    }, {
        name: 'ea',
        type: 'string'
    }, {
        name: 'camp',
        type: 'string'
    }, {
        name: 'smpp_c_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }]);

var SubscKeyConf = Ext.data.Record.create([
    {
        name: 'subsckey_type',
        type: 'string'
    },
    {
        name: 'subsckey_val',
        type: 'string'
    },
    {
        name: 'subsckey_sucs_msg',
        type: 'string'
    },
    {
        name: 'subsckey_fail_msg',
        type: 'string'
    }
]);

var SubscStatusConf = Ext.data.Record.create([
    {
        name: 'subsckey_status_type',
        type: 'string'
    },
    {
        name: 'subsckey_status_msg',
        type: 'string'
    }
]);

var ToNumRouteProf = Ext.data.Record.create([{
        name: 'tnrp_name',
        type: 'string'
    }, {
        name: 'tnrp_def_prof',
        type: 'string'
    }, {
        name: 'tnrp_num_list',
        type: 'string'
    }, {
        name: 'tnrp_c_ts',
        type: 'date' // ,
    }, {
        name: 'tnrp_c_by',
        type: 'string'
// dateFormat: 'y/m/d H:i:s' //n/j/Y
    }]);

var DnaRec = Ext.data.Record.create([{
        name: 'dna_id',
        type: 'string'
    }, {
        name: 'dna_prefix',
        type: 'string'
    }, {
        name: 'dna_length',
        type: 'string'
    }, {
        name: 'dna_rem_length',
        type: 'string'
    }, {
        name: 'dna_add_prefix',
        type: 'string'
    }, {
        name: 'dna_replace_src',
        type: 'string'
    }, {
        name: 'dna_dest_ton',
        type: 'string'
    }, {
        name: 'dna_esme_id',
        type: 'string'
    }, {
        name: 'dna_replace_src',
        type: 'string'
    }, {
        name: 'dna_c_ts',
        type: 'date'
    }, {
        name: 'dna_c_by',
        type: 'string'
    }]);

var RpDnaRec = Ext.data.Record.create([{
        name: 'dna_id',
        type: 'string'
    }, {
        name: 'dna_prefix',
        type: 'string'
    }, {
        name: 'dna_length',
        type: 'string'
    }, {
        name: 'dna_rem_length',
        type: 'string'
    }, {
        name: 'dna_add_prefix',
        type: 'string'
    }, {
        name: 'dna_replace_src',
        type: 'string'
    }, {
        name: 'dna_dest_ton',
        type: 'string'
    }, {
        name: 'dna_esme_id',
        type: 'string'
    },
    {
        name : 'dna_esme_red_id',
        type : 'string'
    },{
        name: 'dna_replace_src',
        type: 'string'
    }, {
        name: 'dna_c_ts',
        type: 'date'
    }, {
        name: 'dna_c_by',
        type: 'string'
    }, {
        name: 'dna_rp_name',
        type: 'string'
    }]);

var DestCreditRec = Ext.data.Record.create([{
        name: 'dc_id',
        type: 'string'
    }, {
        name: 'dc_prefix',
        type: 'string'
    }, {
        name: 'dc_length',
        type: 'string'
    }, {
        name: 'dc_credit',
        type: 'string'
    }, {
        name: 'dc_c_ts',
        type: 'date'
    }, {
        name: 'dc_c_by',
        type: 'string'
    }]);

var HttpRec = Ext.data.Record.create([{
        name: 'http_acc_id',
        type: 'string'
    }, {
        name: 'http_group',
        type: 'string'
    }, {
        name: 'http_user_name',
        type: 'string'
    }, {
        name: 'http_password',
        type: 'string'
    }, {
        name: 'http_method',
        type: 'string'
    }, {
        name: 'http_throttle',
        type: 'int'
    }, {
        name: 'http_url',
        type: 'string'
    }, {
        name: 'http_url_param',
        type: 'string'
    }, {
        name: 'http_succ_format',
        type: 'string'
    }, {
        name: 'http_fail_format',
        type: 'string'
    }, {
        name: 'http_c_ts',
        type: 'date'
    }, {
        name: 'http_c_by',
        type: 'string'
    }]);
var McConf = Ext.data.Record.create([{
        name: 'id',
        type: 'string'
    }, {
        name: 'group',
        type: 'string'
    }, {
        name: 'mode',
        type: 'string'
    }, {
        name: 'host',
        type: 'string'
    }, {
        name: 'port',
        type: 'string'
    }, {
        name: 'system_id',
        type: 'string'
    }, {
        name: 'password',
        type: 'string'
    }, {
        name: 'system_type',
        type: 'string'
    }, {
        name: 'interface_version',
        type: 'string'
    }, {
        name: 'throttle',
        type: 'string'
    }, {
        name: 'c_by',
        type: 'string'
    }]);

var CampRejectedRec = Ext.data.Record.create([{
        name: 'camp_name',
        type: 'string'
    }, {
        name: 'inst',
        type: 'string'
    }, {
        name: 'camp_size',
        type: 'int'
    }, {
        name: 'rejected_by',
        type: 'string'
    }, {
        name: 'camp_s_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }, {
        name: 'camp_r_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }, {
        name: 'reject_reason',
        type: 'string'
    }]);

var PausedCampListRec = Ext.data.Record.create([{
        name: 'camp_id',
        type: 'string'
    }, {
        name: 'camp_ea',
        type: 'string'
    }, {
        name: 'camp_name',
        type: 'string'
    }, {
        name: 'camp_size',
        type: 'int'
    }, {
        name: 'camp_type',
        type: 'int'
    }, {
        name: 'inst',
        type: 'int'
    }, {
        name: 'camp_active',
        type: 'boolean'
    }, {
        name : 'pause_reason',
        type : 'string'
    }, {
        name : 'pause_time',
        type : 'date',
        dateFormat : 'y/m/d H:i:s'
    },{
        name: 'camp_s_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }, , {
        name: 'camp_c_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }, {
        name: 'camp_c_by',
        type: 'string'
    }]);
var CampListRec = Ext.data.Record.create([
    {
        name: 'camp_id',
        type: 'string'
    }, {
        name: 'camp_ea',
        type: 'string'
    }, {
        name: 'inst',
        type: 'int'
    }, {
        name: 'camp_name',
        type: 'string'
    }, {
        name: 'camp_size',
        type: 'int'
    }, {
        name: 'camp_type',
        type: 'int'
    }, {
        name: 'camp_acl',
        type: 'int'
    }, {
        name: 'camp_ind_msgs',
        type: 'int'
    }, {
        name: 'camp_s_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }, {
        name: 'camp_c_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }, {
        name: 'camp_c_by',
        type: 'string'
    }]);

var RouteProfListRec = Ext.data.Record.create([{
        name: 'routeprof_id',
        type: 'string'
    }, {
        name: 'routeprof_name',
        type: 'string'
    }, {
        name: 'routeprof_active',
        type: 'bool'
    }, {
        name: 'routeprof_c_by',
        type: 'string'
    }, {
        name: 'routeprof_c_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }]);
var CampDDListRec = Ext.data.Record.create([{
        name: 'camp_id',
        type: 'string'
    }, {
        name: 'camp_name',
        type: 'string'
    }, {
        name: 'camp_active',
        type: 'bool'
    }, {
        name: 'camp_type',
        type: 'int'
    }]);

var VoteOptRec = Ext.data.Record.create([{
        name: 'pattern',
        type: 'string'
    }, {
        name: 'vote_opt',
        type: 'string'
    }]);

var IoDOptRec = Ext.data.Record.create([{
        name: 'pattern',
        type: 'string'
    }, {
        name: 'iod_txt',
        type: 'string'
    }]);

var InboxMsgRec = Ext.data.Record.create([{
        name: 'msg_id',
        type: 'int'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'recv_at',
        type: 'string'
    }, {
        name: 'from',
        type: 'string'
    }, {
        name: 'to',
        type: 'string'
    }, {
        name: 'key',
        type: 'string'
    }, {
        name: 'message',
        type: 'string'
    }, {
        name: 'from_name',
        type: 'string'
    }, {
        name: 'to_name',
        type: 'string'
    }]);

var CreditPkgRec = Ext.data.Record.create([{
        name: 'pkg_id',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'amount',
        type: 'int'
    }, {
        name: 'type',
        type: 'int'
    }, {
        name: 'active',
        type: 'bool'
    }, {
        name: 'expiry',
        type: 'int'
    }, {
        name: 'expiry_unit',
        type: 'int'
    }, {
        name: 'allow_ea',
        type: 'bool'
    }, {
        name: 'c_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }, {
        name: 'c_by',
        type: 'string'
    }]);

var RouteListRec = Ext.data.Record.create([{
        name: 'route_id',
        type: 'string'
    }, {
        name: 'key',
        type: 'string'
    }, {
        name: 'type',
        type: 'int'
    }, {
        name: 'dest',
        type: 'string'
    }, {
        name: 'active',
        type: 'bool'
    }, {
        name: 'ussd',
        type: 'bool'
    }, {
        name: 'c_ts',
        type: 'date',
        dateFormat: 'y/m/d H:i:s'
    }, {
        name: 'c_by',
        type: 'string'
    }]);


var ACL_RO_NO_VIEW = 0;
var ACL_RO = 1;
var ACL_RW = 2;

var AclTypes = [
// [ACL_RO_NO_VIEW, 'Bulk Push'], // To-to: temporary not available
    [ACL_RO, 'Read Only'], [ACL_RW, 'Read/Write']];

var CT_SMS_PUSH = 0;
var CT_VOTING = 1;
var CT_IOD_SERVICE = 2;
var CT_EXTERNAL_SMPP = 3;
var CT_EXTERNAL_HTTP = 4;

var CampTypes = [[CT_SMS_PUSH, 'Bulk Push'], [CT_VOTING, 'Voting'],
    [CT_IOD_SERVICE, 'IoD Service'],
    [CT_EXTERNAL_SMPP, 'SMPP External'],
    [CT_EXTERNAL_HTTP, 'HTTP External']];

var ChargeType = [[0, 'Push Charge'], [1, 'Registration Charge'],
    [2, 'Unregistration Charge'],
    [3, 'Content Charge'],
    [4, 'Reply Charge']];

var TE_ALERT_FROM_HLR = 1;
var TE_SM_DELETED_EXPIRED = 2;
var TE_STATUS_REPORT = 3;
var TE_SM_DELIVERED = 5;
var TE_SM_TEMP_DELIVERY_FAILED = 6;
var TE_SM_ABANDONED = 7;
var TE_SM_SUBMITTED = 8;
var TE_SM_REJECTED = 9;
var TE_SM_DELETED_OPER_REQ = 11;

var SmsbEventTypes = [
    [TE_ALERT_FROM_HLR, 'Alert from HLR'],
    [TE_SM_DELETED_EXPIRED, 'Short Message Expired'],
    [TE_STATUS_REPORT, 'Status Report'],
    [TE_SM_DELIVERED, 'Short Message Delivered'],
    [TE_SM_TEMP_DELIVERY_FAILED,
        'Short Message Delivery Temporary Failure'],
    [TE_SM_ABANDONED, 'Short Message Delivery Failure Message Abandoned'],
    [TE_SM_SUBMITTED, 'Short Message Accepted'],
    [TE_SM_REJECTED, 'Short Message Rejected'],
    [TE_SM_DELETED_OPER_REQ, 'Short Message Deleted by Operator Request']];

var CPT_PREPAID = 0;
var CPT_POSTPAID = 1;

var CPkgTypes = [[CPT_PREPAID, 'Prepaid'], [CPT_POSTPAID, 'Postpaid']];

var CPkgExpiry = [[1, 'Minutes'], [2, 'Hours'], [3, 'Days'],
    [4, 'Months'], [5, 'Years']];

var RT_KEYWORD = 1;
var RT_CAMPAIGN = 2;
var RT_EA = 3;
var RT_EA_INBOX = 4;
var RT_CAMPAIGN_TRIG = 5;

var RouteTypes = [[RT_KEYWORD, 'Keyword'], [RT_CAMPAIGN, 'Campaign'],
    [RT_EA, 'Enterprise Account'], [RT_EA_INBOX, 'EA Inbox'], [RT_CAMPAIGN_TRIG, 'Tiggering Campaign']];
var SM_TRANSCEIVER = 'trx';
var SM_TRANSMITTER = 'tx';
var SM_RECEIVER = 'rx';
var SM_TXRX = 'txrx';
var SmppModes = [[SM_TRANSCEIVER, 'Transceiver'],
    [SM_TRANSMITTER, 'Transmitter'], [SM_RECEIVER, 'Receiver']];
var FROM_NO_CHANGE = "0";
var FROM_OVERRIDE = "1";
var FROM_RESTRICT = "2";
var FromAddressBehaviors = [[FROM_NO_CHANGE, 'No Change'],
    [FROM_OVERRIDE, 'Override'], [FROM_RESTRICT, 'Restrict']]
var MT_NORMAL_SMS = 0;
var MT_FLASH_SMS = 1;
var MT_VCARD_SMS = 2;
var MT_UNICODE_SMS = 3;
var MT_USSD = 4;

var MsgTypes = [[MT_NORMAL_SMS, 'Normal SMS'],
    [MT_FLASH_SMS, 'Flash SMS'], [MT_VCARD_SMS, 'Business Card'],
    [MT_UNICODE_SMS, 'Unicode SMS']];

var MsgTypes2 = [[MT_NORMAL_SMS, 'Normal SMS'],
    [MT_FLASH_SMS, 'Flash SMS'], [MT_VCARD_SMS, 'Business Card'],
    [MT_UNICODE_SMS, 'Unicode SMS'], [MT_USSD, 'USSD']];

var HPT_DESKTOP = '0';
var HPT_MY_INBOX = '1';
var HPT_MY_STATS = '2';
var HPT_EA_INBOX = '3';
var HPT_EA_STATS = '4';
var HPT_CAMP_INBOX = '5';
var HPT_CAMP_STATS = '6';

var HptTypes = [[HPT_DESKTOP, 'Desktop'], [HPT_MY_INBOX, 'My Inbox'],
    [HPT_MY_STATS, 'My Stats'],
    [HPT_EA_INBOX, 'Enterprise Account Inbox'],
    [HPT_EA_STATS, 'Enterprise Account Stats'],
    [HPT_CAMP_INBOX, 'Campaign Inbox'],
    [HPT_CAMP_STATS, 'Campaign Stats']];

var allowGatewayMgt = true;
var allowRxTx = true;

var vcardTempl = "N:<Name>\r\nTEL:<Telephone>";
var TonData = [[0, 'Unknown-0'], [1, 'International-1'], [2, 'National-2'],
    [3, 'Network Specific-3'], [4, 'Subscriber Number-4'],
    [5, 'Alphanumeric-5'], [6, 'Abbreviated-6'], ['any', 'Any-Default']];
var NpiData = [[0, 'Unknown-0'], [1, 'ISDN-1'], [2, 'Data-3'],
    [3, 'Telex-4'], [4, 'Land Mobile-6'],
    [5, 'National-8'], [6, 'Private-9'], [7, 'Ermes-10'], [8, 'Internet14'], [9, 'Wap Client ID-18'],
    ['any', 'Any-Default']];



var NpiData = [[0, 'Unknown'], [1, 'ISDN'], [2, 'Data'],
    [3, 'Telex'], [4, 'Land Mobile'],
    [5, 'National'], [6, 'Private'], [7, 'Ermes'], [8, 'Internet'], [9, 'Wap Client ID'], ['any', 'Any']];

var LenData = [['1', '1 '], ['2', '2 '], ['3', '3 '], ['4', '4 '],
    ['5', '5 '], ['6', '6 '], ['7', '7 '], ['8', '8 '],
    ['9', '9 '], ['10', '10 '], ['11', '11 '], ['12', '12 '],
    ['13', '13 '], ['14', '14 '], ['15', '15 '], ['16', '16 '],
    ['17', '17 '], ['18', '18 '], ['19', '19 '], ['20', '20 '],
    ['any', 'Any ']];

var RemLenData = [[1, '1 '], [2, '2 '], [3, '3 '], [4, '4 '],
    [5, '5 '], [6, '6 '], [7, '7 '], [8, '8 '], [9, '9 '],
    [10, '10 '], [11, '11 '], [12, '12 '], [13, '13 '],
    [14, '14 '], [15, '15 '], [16, '16 '], [17, '17 '],
    [18, '18 '], [19, '19 '], [20, '20 ']];
var HttpMode = [['get', 'GET'], ['post', 'POST']];
// create reusable renderer
// Ext.util.Format.comboRenderer = function(combo) {
// return function(value) {
// var record = combo.findRecord(combo.valueField, value);
// return record ? record.get(combo.displayField) : combo.valueNotFoundText;
// }
// }

Ext.util.Format.comboRenderer = function(combo) {
    return function(value) {
        var record = combo.findRecord(combo.valueField || combo.displayField,
                value);
        return record ? record.get(combo.displayField)
                : combo.valueNotFoundText;
    }
}

// create reusable renderer
Ext.util.Format.arrayRenderer = function(array) {
    return function(value) {
        var res;
        Ext.each(array, function(item, index, allItems) {
            if (item[0] == value)
                res = item[1];
        });
        return res;
    }
}

// create reusable renderer
keyNameRenderer = function(keyNameArr) {
    return function(value) {
        var retVal = '';
        Ext.each(keyNameArr, function(item, index, allItems) {
            if (item[0] == value)
                retVal = item[1];
        }, value);
        return retVal;
    }
}

/*
 * var ajaxWait = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});
 * Ext.Ajax.on('beforerequest', ajaxWait.show, ajaxWait);
 * Ext.Ajax.on('requestcomplete', ajaxWait.hide, ajaxWait);
 * Ext.Ajax.on('requestexception', ajaxWait.hide, ajaxWait);
 */

Ext.override(Ext.layout.FormLayout, {
    renderItem: function(c, position, target) {
        if (c && !c.rendered && (c.isFormField || c.fieldLabel)
                && c.inputType != 'hidden') {
            var args = this.getTemplateArgs(c);
            if (typeof position == 'number') {
                position = target.dom.childNodes[position] || null;
            }
            if (position) {
                c.formItem = this.fieldTpl.insertBefore(position, args, true);
            } else {
                c.formItem = this.fieldTpl.append(target, args, true);
            }
            c.actionMode = 'formItem';
            c.render('x-form-el-' + c.id);
            c.container = c.formItem;
            c.actionMode = 'container';
        } else {
            Ext.layout.FormLayout.superclass.renderItem.apply(this, arguments);
        }
    }
});
Ext.override(Ext.form.TriggerField, {
    actionMode: 'wrap',
    onShow: Ext.form.TriggerField.superclass.onShow,
    onHide: Ext.form.TriggerField.superclass.onHide
});

Ext.override(Ext.form.Field, {
    setFieldLabel: function(text) {
        if (this.rendered) {
            this.el.up('.x-form-item', 10, true).child('.x-form-item-label')
                    .update(text);
        }
        this.fieldLabel = text;
    }
});

// VTYPE: numeric
Ext.form.VTypes['numericVal'] = /^[+-]?\d*$/i;
Ext.form.VTypes['numericText'] = 'Not a valid number';
Ext.form.VTypes['numericMask'] = /[0-9\-\+]/;
Ext.form.VTypes['numeric'] = function(v) {
    return Ext.form.VTypes['numericVal'].test(v);
};

// VTYPE: key
Ext.form.VTypes['keyVal'] = /^.{4,8}$/;
Ext.form.VTypes['keyText'] = 'Key must be 4 to 8 characters long (Optional)';
Ext.form.VTypes['keyMask'] = /[a-zA-Z0-9_:\-\*]/;
Ext.form.VTypes['key'] = function(v) {
    return Ext.form.VTypes['keyVal'].test(v);
};

// VTYPE: routekey
Ext.form.VTypes['routekeyVal'] = /^[a-zA-Z0-9_:\-\*\+\.]{0,20}$/;
Ext.form.VTypes['routekeyText'] = 'Key must not exceed 20 characters';
Ext.form.VTypes['routekeyMask'] = /[a-zA-Z0-9_:\-\*\+\.]/;
Ext.form.VTypes['routekey'] = function(v) {
    return Ext.form.VTypes['routekeyVal'].test(v);
};

// VTYPE: name
Ext.form.VTypes["nameVal"] = /^[_a-zA-Z][-_.a-zA-Z0-9 ]{3,40}$/;
Ext.form.VTypes["name"] = function(v) {
    return Ext.form.VTypes["nameVal"].test(v);
}
Ext.form.VTypes["nameText"] = "Account name must begin with a letter and cannot be less than 3 or exceed 40 characters"
Ext.form.VTypes["nameMask"] = /[-_.a-zA-Z0-9 ]/;

// VTYPE: password
Ext.form.VTypes["passwordVal1"] = /^.{5,20}/;
// Ext.form.VTypes["passwordVal1"] = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/;
// Ext.form.VTypes["passwordVal2"] = /[^a-zA-Z].*[^a-zA-Z]/;
// Ext.form.VTypes["passwordVal1"] = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){5,20}$/;
Ext.form.VTypes["passwordVal2"] = /[^a-zA-Z]/;
Ext.form.VTypes["password"] = function(v) {
    if (!Ext.form.VTypes["passwordVal1"].test(v)) {
        Ext.form.VTypes["passwordText"] = "Password length must be 6 to 20 characters long";
        return false;
    }
    Ext.form.VTypes["passwordText"] = "Password must include atleast 1 number or symbol";
    return Ext.form.VTypes["passwordVal2"].test(v);
}
Ext.form.VTypes["passwordText"] = "Invalid Password"
Ext.form.VTypes["passwordMask"] = /./;

Ext.form.VTypes["smpp_passwordVal"] = /^.{1,9}$/;
Ext.form.VTypes["smpp_password"] = function(v) {
    return Ext.form.VTypes["smpp_passwordVal"].test(v);
}
Ext.form.VTypes["smpp_passwordText"] = "maximum length is 9 characters"
Ext.form.VTypes["smpp_passwordMask"] = /./;

// //VTYPE: phone
Ext.form.VTypes["phoneVal"] = phoneNumVal;
Ext.form.VTypes["phone"] = function(v) {
    return Ext.form.VTypes["phoneVal"].test(v);
}
Ext.form.VTypes["phoneMask"] = /[0-9-]/;
Ext.form.VTypes["phoneText"] = 'Not a valid phone number.  Must be in the format '
        + phoneNumFmt + ' (dashes optional)';


// VTYPE: phone_number
Ext.form.VTypes["phone_numberVal"] = /^([0-9]{9}|[0-9]{10}|[0-9]{11}|\+[0-9]{11})$/;
Ext.form.VTypes["phone_number"] = function(v) {
    return Ext.form.VTypes["phone_numberVal"].test(v);
}
Ext.form.VTypes["phone_numberText"] = "Number Should be in 94xxxxxxxxx Format !"
Ext.form.VTypes["phone_numberMask"] = /[0-9\+]/;

// VTYPE: multiip
Ext.form.VTypes["multiipVal"] = /^(([1-9][0-9]{0,1}|1[013-9][0-9]|12[0-689]|2[01][0-9]|22[0-3])([.]([1-9]{0,1}[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){2}[.]([1-9]{0,1}[0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-4])([,]\s)?)+$/;
Ext.form.VTypes["multiip"] = function(v) {
    return Ext.form.VTypes["multiipVal"].test(v);
}
Ext.form.VTypes["multiipMask"] = /[.,0-9\s]/;
Ext.form.VTypes["multiipText"] = 'Not a valid IP Address. 1.0.0.0 - 223.255.255.254 excluding 127.x.x.x';

// VTYPE: gentextfield
Ext.form.VTypes["gentextfieldVal"] = /^[-_.,:\/\\ \(\)a-zA-Z0-9]{3,40}$/;
Ext.form.VTypes["gentextfield"] = function(v) {
    return Ext.form.VTypes["gentextfieldVal"].test(v);
}
Ext.form.VTypes["gentextfieldText"] = "This field cannot exceed 40 characters"
Ext.form.VTypes["gentextfieldMask"] = /[-_.,:\/\\ \(\)a-zA-Z0-9]/;

// VTYPE: gentextfield2
Ext.form.VTypes["gentextfield2Val"] = /^[-_.,:\/\\ \(\)a-zA-Z0-9]{3,100}$/;
Ext.form.VTypes["gentextfield2"] = function(v) {
    return Ext.form.VTypes["gentextfield2Val"].test(v);
}
Ext.form.VTypes["gentextfield2Text"] = "This field cannot exceed 100 characters"
Ext.form.VTypes["gentextfield2Mask"] = /[-_.,:\/\\ \(\)a-zA-Z0-9]/;

// VTYPE: sms_vtype
Ext.form.VTypes["sms_vtypeVal"] = smsVal;
Ext.form.VTypes["sms_vtype"] = function(v) {
    return Ext.form.VTypes["sms_vtypeVal"].test(v);
}
Ext.form.VTypes["sms_vtypeText"] = "Not a valid SMS message. Please see if there are any special characters except"
Ext.form.VTypes["sms_vtypeMask"] = smsMask;

// VTYPE: dst_addr
Ext.form.VTypes['dst_addrVal'] = /[0-9, \+]/;
Ext.form.VTypes['dst_addrText'] = 'Must be one or more destination numbers, seperated by comma or space';
Ext.form.VTypes['dst_addrMask'] = /[0-9, \+]/;
Ext.form.VTypes['dst_addr'] = function(v) {
    return Ext.form.VTypes['dst_addrVal'].test(v);
};

// VTYPE: src_addr
Ext.form.VTypes['src_addrVal'] = /[a-zA-Z0-9]/;
Ext.form.VTypes['src_addrText'] = 'Must be a single source address';
Ext.form.VTypes['src_addrMask'] = /[a-zA-Z0-9\+]/;
Ext.form.VTypes['src_addr'] = function(v) {
    return Ext.form.VTypes['src_addrVal'].test(v);
};

Ext.form.VTypes["portVal"] = /^(0|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;

Ext.form.VTypes["port"] = function(v) {
    return Ext.form.VTypes["portVal"].test(v);
}
Ext.form.VTypes["portText"] = "0 - 65535"
Ext.form.VTypes["portMask"] = /[0-9]/;

Ext.form.VTypes["ipVal"] = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

Ext.form.VTypes["ip"] = function(v) {
    return Ext.form.VTypes["ipVal"].test(v);
}
Ext.form.VTypes["ipText"] = 'Not a valid IP Address.'
Ext.form.VTypes["ipMask"] = /[\d\.]/i

Ext.form.VTypes["uriVal"] = /^[_a-zA-Z0-9\-]+\.[_a-zA-Z0-9\-]+[\._a-zA-Z0-9\-]*$/;

Ext.form.VTypes["uri"] = function(v) {
    return Ext.form.VTypes["uriVal"].test(v);
}
Ext.form.VTypes["uriText"] = 'Not a valid URI.'
Ext.form.VTypes["uriMask"] = /[_a-zA-Z0-9\.\-]/i

// //
Ext.form.VTypes["num_prefixVal"] = /^\d\d*[\*]*\d\d*|\d\d*$/;

Ext.form.VTypes["num_prefix"] = function(v) {
    return Ext.form.VTypes["num_prefixVal"].test(v);
}
Ext.form.VTypes["num_prefixText"] = 'eg. 94, 94**4, +94, +94**4'
Ext.form.VTypes["num_prefixMask"] = /[+\d\*]/;

var numlength = new Ext.data.SimpleStore({
    fields: ['id', 'dna_length'],
    data: [['0', '1'], ['1', '1'], ['2', '2'], ['3', '3'],
        ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'],
        ['8', '8'], ['9', '9'], ['10', '10']]
});

function genre_name(val) {
    return genres.queryBy(function(rec) {
        return rec.data.id == val;
    }).itemAt(0).data.genre;
}
