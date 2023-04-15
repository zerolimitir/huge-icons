import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.67 4.723c-1.098.124-2.026.933-2.337 2.037-.069.246-.073.535-.073 5.24 0 4.697.004 4.995.073 5.24.273.973.95 1.656 1.949 1.965.586.182 1.34.108 1.925-.189.454-.23 8.157-4.643 8.379-4.8.684-.484 1.134-1.365 1.134-2.216 0-.878-.477-1.781-1.191-2.254-.339-.224-8.156-4.686-8.428-4.811a2.823 2.823 0 0 0-1.431-.212m.896 1.62c.51.259 8.137 4.64 8.252 4.74.069.061.179.207.244.324.107.194.118.247.118.593s-.011.399-.118.593a1.485 1.485 0 0 1-.244.324c-.108.094-7.625 4.415-8.258 4.747-.192.1-.263.115-.56.115-.291 0-.369-.015-.54-.106a1.461 1.461 0 0 1-.586-.593l-.094-.18V7.1l.094-.18a1.37 1.37 0 0 1 .826-.685c.225-.06.636-.008.866.108'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlay);
export default ForwardRef;
