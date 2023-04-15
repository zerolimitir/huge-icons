import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignalCellularLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M20.815 3.277a.8.8 0 0 0-.462.354l-.093.149v16.44l.093.149c.357.574 1.223.443 1.363-.207.06-.28.061-16.061.001-16.321a.747.747 0 0 0-.902-.564m-6 4a.8.8 0 0 0-.462.354l-.093.149v12.44l.093.149c.357.574 1.223.443 1.363-.207.06-.279.061-12.062.001-12.321a.747.747 0 0 0-.902-.564m-6 4a.8.8 0 0 0-.462.354l-.093.149v8.44l.093.149c.357.574 1.223.443 1.363-.207.059-.277.06-8.064.001-8.321a.747.747 0 0 0-.902-.564m-6 4a.8.8 0 0 0-.462.354l-.093.149v4.44l.093.149c.357.574 1.223.443 1.363-.207.058-.271.059-4.069.001-4.321a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularLine);
export default ForwardRef;
