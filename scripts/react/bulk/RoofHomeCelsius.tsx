import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeCelsius = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.13 9.06c-.563.244-.798.893-.513 1.41.191.347.496.53.883.53s.692-.183.883-.53c.288-.521.046-1.175-.522-1.412-.175-.073-.561-.072-.731.002m-3.535 1.7a3.823 3.823 0 0 0-2.489 1.353c-1.231 1.51-1.135 3.644.228 5.022A3.653 3.653 0 0 0 12 18.251c.447 0 .741-.046 1.16-.179.616-.195 1.39-.702 1.533-1.003a.912.912 0 0 0 .013-.641c-.073-.175-.31-.375-.506-.428-.206-.056-.397-.019-.593.114-.495.335-.609.402-.827.485-.332.127-.976.156-1.34.062a2.268 2.268 0 0 1-1.623-1.697 2.172 2.172 0 0 1 .603-2.026c.461-.463.94-.658 1.619-.658.44 0 .845.119 1.189.351l.379.255c.304.206.635.181.913-.071.188-.17.255-.354.232-.637-.022-.264-.133-.417-.495-.689-.734-.549-1.78-.836-2.662-.729'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeCelsius);
export default ForwardRef;
