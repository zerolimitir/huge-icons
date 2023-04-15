import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.24 8.062C9.319 8.473 8 10.076 8 12c0 1.101.426 2.11 1.211 2.867.5.483 1.023.784 1.729.999.334.102.411.11 1.06.11s.726-.008 1.06-.11c1.412-.429 2.377-1.394 2.806-2.806.102-.334.11-.411.11-1.06s-.008-.726-.11-1.06c-.463-1.523-1.588-2.561-3.114-2.876-.379-.079-1.15-.079-1.512-.002m1.065 1.775c.09.041.216.142.28.225.11.145.116.174.135.675l.02.523.52.02c.286.011.556.041.6.067.209.12.381.42.379.662-.001.197-.132.446-.301.576l-.152.115-.996.012c-.995.012-.996.012-1.164-.086a.798.798 0 0 1-.256-.258c-.086-.152-.09-.199-.09-1.101 0-.57.017-.986.043-1.054a.692.692 0 0 1 .377-.377.681.681 0 0 1 .605.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatClock);
export default ForwardRef;
