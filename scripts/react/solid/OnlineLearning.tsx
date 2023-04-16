import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOnlineLearning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.328 1.285c-1.162.096-2.475.532-3.415 1.136-.51.327-.637.488-.639.816-.004.464.417.83.859.747.075-.014.287-.118.472-.231a6.739 6.739 0 0 1 2.172-.882c.586-.127 1.86-.127 2.446 0a6.56 6.56 0 0 1 2.177.891c.28.18.368.216.559.23.351.026.608-.128.739-.442a.727.727 0 0 0-.024-.622c-.07-.146-.156-.223-.476-.433a7.716 7.716 0 0 0-3.614-1.214c-.57-.045-.659-.045-1.256.004m.188 2.997c-.632.056-1.572.376-1.998.679-.237.169-.347.572-.236.866a.84.84 0 0 0 .43.417c.242.08.435.051.782-.118.589-.287.847-.346 1.506-.346s.917.059 1.506.346c.347.169.54.198.782.118a.84.84 0 0 0 .43-.417c.111-.294.001-.697-.236-.866-.226-.161-.864-.438-1.243-.54-.322-.086-1.121-.192-1.319-.175l-.404.036M5.109 8.041a1.447 1.447 0 0 0-.862.63C3.988 9.079 4 8.829 4 13.883c0 4.457.002 4.596.079 4.844.151.488.447.821.941 1.056.219.104.385.148.76.198 1.593.211 2.955.546 4.006.984.43.179 1.029.473 1.26.619.084.053.162.096.173.096.012 0 .021-2.687.021-5.971V9.738l-.45-.246c-1.118-.609-2.5-1.053-4.144-1.328-.811-.136-1.321-.177-1.537-.123m13.111-.016c-2.286.34-3.765.776-5.05 1.487l-.41.226v11.938l.493-.258c1.355-.707 2.734-1.119 4.674-1.396.389-.055.807-.138.929-.184a1.796 1.796 0 0 0 1.03-.984l.094-.234.011-4.658c.011-5.138.023-4.881-.238-5.291a1.358 1.358 0 0 0-1.123-.651 3.001 3.001 0 0 0-.41.005'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOnlineLearning);
export default ForwardRef;