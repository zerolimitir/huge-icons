import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLineChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.68 4.028c-.418.07-.862.314-1.156.635a1.997 1.997 0 0 0-.183 2.446l.141.212-3.164 4.34L12.154 16h-.144c-.282 0-.647.089-.912.222-.258.13-.272.133-.355.067-.047-.038-1.139-.936-2.425-1.997L5.98 12.365l.014-.273c.054-1.061-.755-1.979-1.831-2.077a2.012 2.012 0 0 0-1.579.595c-.781.783-.775 2.005.013 2.793.636.636 1.532.773 2.337.359l.234-.12.207.169 2.428 1.998 2.221 1.829-.017.267c-.035.552.173 1.082.589 1.499.796.795 2.01.794 2.808-.001.681-.68.786-1.712.255-2.512l-.141-.212 3.165-4.34L19.847 8h.174C21.086 8 22 7.069 22 5.986c0-.915-.719-1.779-1.617-1.943a2.232 2.232 0 0 0-.703-.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChart);
export default ForwardRef;
