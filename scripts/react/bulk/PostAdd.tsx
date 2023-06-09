import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPostAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.807 1.289c-.249.053-.465.281-.523.549-.026.122-.044.653-.044 1.304V4.24l-1.19.001c-1.071.001-1.206.008-1.35.075a.743.743 0 0 0 0 1.368c.144.067.279.074 1.35.075l1.19.001.001 1.19c.001 1.071.008 1.206.075 1.35a.743.743 0 0 0 1.368 0c.067-.144.074-.279.075-1.35l.001-1.19h1.098c.651 0 1.182-.018 1.304-.044.758-.163.758-1.269 0-1.432-.122-.026-.653-.044-1.304-.044H18.76l-.001-1.11c-.001-.617-.019-1.19-.042-1.289-.097-.421-.47-.647-.91-.552M7.7 6.316a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074m0 5a.745.745 0 0 0 .029 1.382c.131.055.64.062 4.28.061 3.931-.001 4.139-.004 4.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.152-.071-.359-.074-4.3-.074s-4.148.003-4.3.074m0 5a.745.745 0 0 0 .029 1.382c.131.055.64.062 4.28.061 3.931-.001 4.139-.004 4.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.152-.071-.359-.074-4.3-.074s-4.148.003-4.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPostAdd);
export default ForwardRef;
