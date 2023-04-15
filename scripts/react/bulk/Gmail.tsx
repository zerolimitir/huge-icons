import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGmail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.397 3.04c-1.598.274-2.844 1.395-3.258 2.928-.055.205-.11.525-.121.712l-.022.34 3.852 3.073c2.119 1.691 3.969 3.144 4.112 3.231 1.217.735 2.863.735 4.08 0 .143-.087 1.993-1.54 4.112-3.231l3.852-3.073-.02-.32a4.067 4.067 0 0 0-.78-2.088c-.55-.73-1.259-1.214-2.172-1.482l-.372-.109-6.54-.006c-3.597-.004-6.622.008-6.723.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGmail);
export default ForwardRef;
