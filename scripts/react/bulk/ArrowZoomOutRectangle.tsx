import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowZoomOutRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.7 7.316a.745.745 0 0 0 .029 1.382c.113.047.302.062.8.062h.651l-2.7 2.7-2.7 2.701-.02-.691c-.021-.733-.044-.829-.247-1.018a.745.745 0 0 0-1.197.248c-.068.147-.074.29-.074 1.8s.006 1.653.074 1.8a.734.734 0 0 0 .413.398c.221.092 3.321.092 3.542 0a.748.748 0 0 0 0-1.396c-.113-.047-.302-.062-.8-.062H9.82l2.7-2.7 2.7-2.701.02.691c.021.733.044.829.247 1.018.389.364 1.002.223 1.211-.277.092-.221.092-3.321 0-3.542a.734.734 0 0 0-.398-.413c-.147-.068-.29-.074-1.8-.074s-1.653.006-1.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowZoomOutRectangle);
export default ForwardRef;
