import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDownloadCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.807.289c-.249.053-.465.281-.523.549-.031.145-.044 1.994-.044 6.274v6.068l-1.41-1.409c-.953-.952-1.458-1.428-1.559-1.47-.369-.152-.78.019-.955.399a.667.667 0 0 0 .001.6c.106.225 4.206 4.314 4.412 4.399a.665.665 0 0 0 .542 0c.103-.043.806-.718 2.28-2.19 1.938-1.936 2.136-2.146 2.188-2.319.163-.544-.32-1.058-.884-.942-.187.038-.252.097-1.645 1.485l-1.45 1.446-.001-6.08c-.001-4.033-.015-6.139-.042-6.258-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDownloadCircle);
export default ForwardRef;
