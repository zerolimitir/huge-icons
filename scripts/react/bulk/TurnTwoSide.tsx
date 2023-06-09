import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTurnTwoSide = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.28 8.304c-.178.077-1.588 1.486-1.757 1.756a1.97 1.97 0 0 0-.283.94c0 .287.117.676.283.94.154.246 1.567 1.665 1.749 1.758.266.134.698.055.896-.165a.904.904 0 0 0 .192-.513c0-.249-.112-.428-.532-.852l-.408-.413.96.013c.951.012.962.013 1.16.119.24.127.457.348.586.593.094.179.094.186.114 1.96.022 1.927.018 1.894.247 2.108a.886.886 0 0 0 .513.212.886.886 0 0 0 .513-.212c.229-.214.225-.181.247-2.108l.02-1.78.107-.2c.127-.24.348-.457.593-.586.172-.09.223-.094 1.14-.107l.96-.013-.409.417c-.537.546-.624.761-.456 1.129a.751.751 0 0 0 1.121.323c.235-.163 1.499-1.46 1.64-1.683.166-.263.284-.652.284-.94 0-.288-.118-.677-.284-.94-.145-.229-1.429-1.544-1.628-1.668-.636-.393-1.39.234-1.106.919.033.082.236.325.449.539l.387.39h-.91c-1.066 0-1.361.045-1.856.283a3.302 3.302 0 0 0-.57.359l-.242.201-.242-.201a3.302 3.302 0 0 0-.57-.359c-.495-.238-.79-.283-1.853-.283h-.908l.419-.43c.355-.364.427-.459.468-.622.151-.603-.465-1.131-1.034-.884'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTurnTwoSide);
export default ForwardRef;
