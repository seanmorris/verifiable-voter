document.addEventListener('mouseover', event => {

	event.preventDefault();
	event.stopPropagation();
	event.stopImmediatePropagation();

	if(!event.target)
	{
		return;
	}

	if(!event.target.matches('a[data-hovercard*="user.php"]'))
	{
		return;	
	}

	console.log(event);

	const profileLink = event.target;

	if(profileLink.___vvProcessed)
	{
		return;
	}

	profileLink.___vvProcessed = true;

	const fullName  = event.target.innerText;
	const splitName = fullName.split(/\s+/gis);

	const firstName = splitName[0];
	const lastName  = splitName[ splitName.length - 1 ];

	const link = document.createElement('div');

	link.innerText           = '☑';
	link.style.color         = 'red';
	link.style.cursor        = 'pointer';
	link.style.fontSize      = '2em';
	link.style.display       = 'inline-flex';
	link.style.fontWeight    = 'bold';
	link.style.verticalAlign = 'middle';
	
	link.setAttribute('target', '_blank');
	link.setAttribute('href', `https://stevemorse.org/nysvoters/nysvoters.php?FirstNameKind=exact&FirstNameMax=${firstName}&MiddleNameKind=exact&MiddleNameMax=&LastNameKind=exact&LastNameMax=${lastName}&NameSuffixKind=exact&NameSuffixMax=&HouseNumberKind=exact&HouseNumberMax=&FractionKind=exact&FractionMax=&ApartmentKind=exact&ApartmentMax=&PreStreetDirectionKind=exact&PreStreetDirectionMax=&streetKind=exact&streetMax=&PostStreetDirectionKind=exact&PostStreetDirectionMax=&CityKind=exact&CityMax=&CountyKind=exact&CountyMax=&Zip5Kind=exact&Zip5Max=&Zip4Kind=exact&Zip4Max=&MailAddress1Kind=exact&MailAddress1Max=&MailAddress2Kind=exact&MailAddress2Max=&MailAddress3Kind=exact&MailAddress3Max=&MailAddress4Kind=exact&MailAddress4Max=&DateofBirthKind=starts&DateofBirthMax=&GenderKind=exact&GenderMax=&PartyKind=exact&PartyMax=&number=4&ElectionDistrictKind=exact&ElectionDistrictMax=&LegislativeDistrictKind=exact&LegislativeDistrictMax=&TownKind=exact&TownMax=&WardKind=exact&WardMax=&CongressionalDistrictKind=exact&CongressionalDistrictMax=&SenateDistrictKind=exact&SenateDistrictMax=&AssemblyDistrictKind=exact&AssemblyDistrictMax=&LastDateVotedKind=exact&LastDateVotedMax=&LastYearVotedKind=exact&LastYearVotedMax=&LastCountyVotedKind=exact&LastCountyVotedMax=&LastRegisteredAddressKind=exact&LastRegisteredAddressMax=&LastRegisteredNameKind=exact&LastRegisteredNameMax=&AssignedCountyKind=exact&AssignedCountyMax=&DateApplicationReceivedKind=exact&DateApplicationReceivedMax=&ApplicationSourceKind=exact&ApplicationSourceMax=&IDRequiredKind=exact&IDRequiredMax=&IDVerifiedKind=exact&IDVerifiedMax=&VoterStatusKind=exact&VoterStatusMax=&StatusReasonKind=exact&StatusReasonMax=&DateInactiveKind=exact&DateInactiveMax=&DatePurgedKind=exact&DatePurgedMax=&IDKind=exact&IDMax=&VoterHistoryKind=exact&VoterHistoryMax=&offset=1&pagesize=50`);

	link.addEventListener('click', event => {

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		const frame = document.createElement('iframe');
		const close = document.createElement('button');

		frame.style.position = 'fixed';
		frame.style.top      = '4em';
		frame.style.left     = '4em';
		frame.style.height   = 'calc(100% - 8em)';
		frame.style.width    = 'calc(100% - 8em)';
		frame.style.zIndex   = '99999';

		close.style.position   = 'fixed';
		close.style.top        = '2em';
		close.style.right      = '2em';
		close.style.height     = '4em';
		close.style.width      = '4em';
		close.style.zIndex     = '99999';
		close.style.color      = 'white';
		close.style.border     = 'none';
		close.style.cursor     = 'pointer';
		close.style.fontWeight = 'bold';
		close.style.background = 'black';
		close.style.borderRadius = '50%';

		close.innerText = '✖️';
		
		frame.style.background = 'white';

		frame.src = link.getAttribute('href');

		close.addEventListener('click', () => {
			close.remove();
			frame.remove();
		});

		document.body.append(frame);
		document.body.append(close);

	}); 

	event.target.parentNode.insertBefore(link, event.target.nextSibling);
})