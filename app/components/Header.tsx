import { FunctionComponent } from 'react';
import styles from "./Header.module.css";
import Link from "next/link";
import Image from 'next/image';


const Header:FunctionComponent = () => {
  	return (
    		<div className={styles.header}>
				<div className={styles.thumbParent}>
							<Image className={styles.hugeiconsticket01} alt="event icon" src="hugeicons_ticket-01.svg" width={50} height={50} />
						<Image className={styles.ticzIcon} alt="svg logo" src="ticz.svg" width={50} height={50} />
				</div>
      			<div className={styles.frameParent}>
        				<div className={styles.eventsWrapper}>
          					<div className={styles.events}>Events</div>
        				</div>
        				<Link className={styles.linkWrapper} href =""><div className={styles.myTicketsWrapper}>
          					<div className={styles.events}>My Tickets</div>
        				</div></Link>
        				<Link className={styles.linkWrapper} href =""><div className={styles.myTicketsWrapper}>
          					<div className={styles.events}>About Project</div>
        				</div></Link>
      			</div>
      			<div className={styles.btns}>
        				<div className={styles.link}>
          					<div className={styles.getEarlyAccess}>My Tickets</div>
          					<div className={styles.div}>
            						<Image className={styles.divChild} alt="a pointer line" src="Line 5.svg" width={50} height={50}/>
          					</div>
        				</div>
      			</div>
			
    		</div>);
};

export default Header;
