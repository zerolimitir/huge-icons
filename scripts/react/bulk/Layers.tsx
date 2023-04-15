import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.49 7.262c-.175.047-3.583 1.573-4.95 2.216-.22.104-1.129.52-2.02.924-1.711.778-1.864.868-2.005 1.178-.099.215-.098.627.001.84.147.318.258.382 2.188 1.265 4.572 2.092 6.65 3.027 6.824 3.069a2.17 2.17 0 0 0 1.08-.049c.161-.053 1.336-.573 2.612-1.156l4.115-1.882c1.89-.865 1.987-.921 2.145-1.248.11-.225.108-.615-.002-.844-.154-.316-.29-.396-1.998-1.173-.891-.405-1.773-.807-1.96-.894-1.725-.804-4.861-2.205-5.036-2.251a2.299 2.299 0 0 0-.994.005'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayers);
export default ForwardRef;
