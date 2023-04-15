import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTurnLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.472 7.241c-.226.039-.398.18-1.14.93-.736.744-.892.951-1.013 1.343-.145.468-.07.989.204 1.426.154.246 1.567 1.665 1.749 1.758.266.134.698.055.896-.165a.904.904 0 0 0 .192-.513c0-.249-.112-.428-.532-.852l-.408-.413.96.013c.951.012.962.013 1.16.119.24.127.457.348.586.593l.094.18.02 2.28c.022 2.477.014 2.39.247 2.608a.745.745 0 0 0 1.197-.248c.069-.149.074-.306.075-2.352.001-2.403-.01-2.55-.239-3.054a2.733 2.733 0 0 0-1.416-1.415c-.428-.194-.76-.239-1.772-.239h-.911l.408-.41c.228-.229.435-.476.469-.559a.752.752 0 0 0-.826-1.03'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTurnLeft);
export default ForwardRef;
