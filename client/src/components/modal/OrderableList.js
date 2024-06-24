import React, { useEffect } from 'react';
import AppInfo from './appEditor/AppInfo.js';

/**
 * Renders a single entry in the orderable list.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.content - The content object containing the details of the entry.
 * @param {string} props.content.name - The name of the entry.
 * @param {string} props.content.uri - The URI of the entry.
 * @param {string} props.content.icon - The icon of the entry.
 * @return {JSX.Element} The rendered entry component.
 */
function OrderableListEntry({ content }) {
    return (
        // <li>
            <AppInfo name={content['name']} uri={content['url']} icon={content['icon']} />
        // {/* </li> */}
    );
}

/**
 * Renders a list of orderable items based on the provided entries.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.entries - The array of entries to render.
 * @return {JSX.Element} The rendered list of orderable items.
 */
export default function OrderableList({ entries }) {
	const [apps, setApps] = React.useState([]);

		/**
		 * Sets up the entries by creating an array of OrderableListEntry components
		 * based on the provided entries array.
		 *
		 * @return {void}
		 */
	const setupEntries = () => {

		setApps([]);

        // Iterate over each entry and add it to the list of orderable list entries
		entries.forEach((element) => {

            setApps((apps) => [...apps, <OrderableListEntry content={element}/>]);
		});
	};




	useEffect(() => {
		setupEntries();
	}, []);

	return (
        
        <div className="orderableList">
                {apps}
        </div>
    );
}
