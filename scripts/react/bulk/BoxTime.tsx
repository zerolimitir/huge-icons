import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxTime = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8 5.912v3.912l.104.208c.233.468.735.671 1.239.502.17-.058.331-.198 1.177-1.033C11.567 8.47 11.608 8.44 12 8.44c.392 0 .433.03 1.48 1.061.846.835 1.007.975 1.177 1.033.504.169 1.006-.034 1.239-.502L16 9.824V2H8v3.912m9.24 8.15C15.319 14.473 14 16.076 14 18c0 1.101.426 2.11 1.211 2.867.5.483 1.023.785 1.729.999.33.1.415.11 1.02.109.587 0 .703-.011 1.051-.105a4.049 4.049 0 0 0 2.706-2.397c.308-.769.367-1.785.146-2.533-.445-1.508-1.584-2.561-3.111-2.876-.379-.079-1.15-.079-1.512-.002m1.065 1.775c.09.041.216.142.28.225.11.145.116.174.135.675l.02.523.26.02c.171.013.309.05.402.108.437.272.423.974-.025 1.236-.157.092-.196.096-.877.096s-.72-.004-.877-.096a.793.793 0 0 1-.253-.256c-.086-.152-.09-.199-.09-1.101 0-.57.017-.986.043-1.054a.692.692 0 0 1 .377-.377.681.681 0 0 1 .605.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxTime);
export default ForwardRef;
