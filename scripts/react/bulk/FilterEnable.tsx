import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilterEnable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.807 1.289c-.249.053-.465.281-.523.549-.025.118-.044.615-.044 1.162 0 .547.019 1.044.044 1.162.163.758 1.269.758 1.432 0 .056-.261.057-2.079.001-2.321-.097-.421-.47-.647-.91-.552m4 3c-.249.053-.465.281-.523.549-.026.12-.044.637-.044 1.245 0 .848.011 1.067.062 1.188a.748.748 0 0 0 1.396 0c.051-.121.062-.34.061-1.2-.001-.578-.02-1.132-.042-1.23-.097-.421-.47-.647-.91-.552M9.7 6.316c-.384.177-.46.374-.459 1.193.001.684.04.852.244 1.039a.746.746 0 0 0 1.199-.248c.062-.134.074-.262.074-.8s-.012-.666-.074-.8c-.181-.392-.607-.558-.984-.384M4.023 9.04c.199 2.372 1.112 4.411 2.665 5.959.6.597 1.338 1.138 2.002 1.465l.31.154.001 1.801c0 1.955.013 2.094.224 2.512.141.277.578.708.855.841.51.246 1.074.288 1.56.116.121-.042.732-.333 1.358-.647 1.003-.502 1.166-.597 1.385-.807.136-.131.303-.341.369-.466.229-.431.248-.585.248-2.035v-1.315l.31-.154c.667-.329 1.426-.885 2.018-1.478.693-.693 1.194-1.4 1.667-2.347.553-1.11.871-2.272.982-3.599l.022-.26-.091.24c-.547 1.444-2.838 2.526-6.108 2.887-.857.094-2.743.094-3.6 0-3.27-.361-5.561-1.443-6.108-2.887l-.091-.24.022.26'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterEnable);
export default ForwardRef;