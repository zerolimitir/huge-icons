import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.503 2.041c-1.022.178-1.947.935-2.301 1.884-.185.497-.201.679-.201 2.425L4 8h16v-.642c0-.713-.055-1.071-.234-1.509a2.99 2.99 0 0 0-1.47-1.537C17.7 4.025 17.748 4.031 15.6 4c-2.138-.03-2.135-.03-2.702-.301-.162-.077-.594-.374-1.014-.697-.74-.569-1.088-.773-1.544-.906-.209-.061-.461-.071-1.94-.079-.935-.006-1.789.005-1.897.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpen);
export default ForwardRef;
