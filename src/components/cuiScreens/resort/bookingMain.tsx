import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useGetResortCleaningListQuery } from '../../slices/apiSlice';
import '../../../styles/resortStyle.css'
import ResortTabs from './resortTabs';
import { useState } from 'react';
import RoomBookingItem from './roomBookingItem';
import RoomBookingForm from './roomBookingForm';


const BookingMain: React.FC = () => {

    const {data: rooms, error: roomsError, isLoading: isRoomsLoading } = useGetResortCleaningListQuery()
    const [bookingCollapsible, setBookingCollapsible] = useState(false);
    const [showFormIndex, setShowFormIndex] = useState<number | null>(null);

    const toggleCollapse = () => {
        setBookingCollapsible(!bookingCollapsible)
    }

    const handleEditClick = (index: number) => {
        setShowFormIndex(index);
      };
    
    return (
        <div className="masterContainer">
            <ResortTabs />
            <div className='cleaningSectionBody'>
                <div className='cleaningReportSection'>
                    <div className='resortTitle'>
                        <div className='resortTitleText'>BOOKING STATUS</div>
                        <button onClick={toggleCollapse} className='resortToggleButton'>{bookingCollapsible ? 'EXPAND' : 'HIDE'}</button>
                    </div>
                    {bookingCollapsible ? null : 
                    <div className='bookingContent'>
                        {showFormIndex !== null && (<RoomBookingForm content={rooms[showFormIndex]} setShowFormIndex={setShowFormIndex}/> )}
                        <section className='resortGrid'>
                            {isRoomsLoading ? <div>Loading...</div> 
                            : roomsError ? <div>Error: 103</div> 
                            : rooms ? rooms.map((item: any, index: number) => {
                                return <RoomBookingItem content={item} key={index} index={index} onEditClick={handleEditClick} />
                            }) 
                            : null}
                        </section>
                    </div>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default BookingMain