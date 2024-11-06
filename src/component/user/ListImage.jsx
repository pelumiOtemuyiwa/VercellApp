import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListImage = ({ search }) => {
    const [records, setRecord] = useState([]);
    const [error, setError] = useState(null);
    const [selectedData, setSelectedData] = useState(null); 
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos', {
                    params: { client_id: 'I4aBlI6SwKQoNsTpzI9ZAsZOXCfyFNG5f9SBBti9Me0' },
                });
                console.log("API response received:", response.data);
                setRecord(response.data);
            } catch (err) {
                setError('An error occurred while fetching the records');
                console.error(err);
            }
        };
        fetchRecords();
    }, []);

    const filterPosts = (records, query) => {
        return records.filter(data =>
            data.user.name.toLowerCase().includes(query.toLowerCase())
        );
    };

    const filteredPosts = filterPosts(records, searchQuery);

    return (
        <div className="content-wrapper p-4">
            <div class="flex justify-start">
            <input
                name="searchText"
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                placeholder="Search by name"
                className="form-control border border-gray-500 p-2 rounded-md w-full md:w-[300px] mb-4"
                required
            />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPosts.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500">No records found.</div>
                ) : (
                    filteredPosts.map((data, index) => (
                        <div
                            key={data.id}
                            className="border border-gray-200 rounded-lg p-4 flex flex-col items-center bg-white shadow-sm"
                        >
                            <div className="food-item-info text-center">
                                <p className="font-semibold mb-2">{data.user.name}</p>
                                <img
                                    src={data.urls?.small}
                                    alt={data.description || 'Image'}
                                    className="w-full h-48 object-cover rounded-lg cursor-pointer mb-2"
                                    onClick={() => setSelectedData(data)}
                                />
                                <p className="text-gray-600">{data.description || 'No Title'}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ListImage;


{/* <div className='card p-4'>
    <div style={{ width: '90%', color: 'black', fontSize: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 3fr', textAlign: 'center', fontWeight: 'bold', lineHeight: 2, borderBottom: '1px solid #ccc' }}>
            <div>S/N</div>
            <div>Photographer's Name</div>
            <div>Image Title</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredPosts.length === 0 ? (
                <div>No records found.</div>
            ) : (
                filteredPosts.map((data, index) => (

                    <div key={data.id} style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 3fr', alignItems: 'center', textAlign: 'center', lineHeight: 2, borderBottom: '1px solid #eee', backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9', padding: '10px 0' }}>
                        <div>{index + 1}</div>
                        <div>{data.user.name}</div>
                        <div>{data.description || 'No Title'}</div>
                        <div>
                            <img
                                src={data.urls?.small}
                                alt={data.description || 'Image'}
                                style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
                                onClick={() => window.location.href = `/modalpage/${data.id}`}
                            />
                        </div>
                    </div>
                ))
            )}
        </div>
    </div>
</div> */}
