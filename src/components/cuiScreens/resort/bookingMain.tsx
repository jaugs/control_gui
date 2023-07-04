import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useGetResortCleaningListQuery } from '../../slices/apiSlice';
import '../../../styles/resortStyle.css'
import ResortTabs from './resortTabs';
import RoomCleanItem from './roomCleanItem';
import { useState } from 'react';
import RoomBookingItem from './roomBookingItem';
import RoomBookingForm from './roomBookingForm';
import { BookingProps } from './roomInterface';


const BookingMain: React.FC = () => {

    const {data: rooms, error: roomsError, isLoading: isRoomsLoading } = useGetResortCleaningListQuery()
    const [bookingCollapsible, setBookingCollapsible] = useState(false);
    const [showFormIndex, setShowFormIndex] = useState<number | null>(null);

    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)

    const toggleCollapse = () => {
        setBookingCollapsible(!bookingCollapsible)
    }

    const handleEditClick = (index: number) => {
        setShowFormIndex(index);
      };

    function getData () {
        console.log(rooms)
        console.log(interfaceData.activeRoomEdit)
    }
    return (
        <div className="masterContainer">
            <ResortTabs />
            <button onClick={getData}>eerfef</button>
            <div className='cleaningSectionBody'>
                <div className='cleaningReportSection'>
                    <div className='resortTitle'>
                        <div className='resortTitleText'>BOOKING STATUS</div>
                        <button onClick={toggleCollapse} className='resortToggleButton'>{bookingCollapsible ? 'EXPAND' : 'HIDE'}</button>
                    </div>
                    {showFormIndex !== null && (<RoomBookingForm content={rooms[showFormIndex]}/> )}
                    {bookingCollapsible ? null : <section className='resortGrid'>
                    {isRoomsLoading ? <div>Loading...</div> : roomsError ? <div>Error: 103</div> : rooms ? rooms.map((item: any, index: number) => {
                        return <RoomBookingItem content={item} key={index} index={index} onEditClick={handleEditClick} />
                    }) : null}
                    </section>}
                </div>
                
            </div>
        </div>
    )
}

export default BookingMain