import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662548400&x-signature=pq%2BSNAFvG2NyYS58YH%2FPQkQu7OA%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary >Follow</Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ducnv__288</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Văn Đức</p>
            </div>

            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>

                <strong className={cx('value')}>18.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
