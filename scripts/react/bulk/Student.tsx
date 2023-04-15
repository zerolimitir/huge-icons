import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStudent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m19.24 6.778-.74.328-.011 2.157c-.007 1.459.004 2.226.034 2.371.053.255.251.498.464.568.354.117.773-.052.928-.373.085-.174.086-.194.075-2.777l-.01-2.602-.74.328M8.01 9.45c.017 1.166.021 1.224.125 1.588.35 1.229 1.231 2.218 2.385 2.677 1.316.524 2.866.295 3.961-.585a3.933 3.933 0 0 0 1.436-2.356c.072-.351.083-.552.083-1.47 0-.585-.009-1.064-.02-1.064-.011 0-.691.296-1.51.657-.82.362-1.607.689-1.75.727-.385.103-1.092.096-1.48-.014-.165-.047-.953-.374-1.751-.728a77.054 77.054 0 0 0-1.474-.642c-.012 0-.014.545-.005 1.21'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudent);
export default ForwardRef;
