import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageBoxCube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 2.042c-.132.02-.366.075-.52.121-.409.123-5.704 2.58-6.06 2.812-.298.195-.822.687-.994.934l-.09.129 4.122 2.061L12 10.16l4.122-2.061 4.122-2.061-.089-.129c-.16-.231-.729-.765-1.006-.944-.149-.097-1.337-.669-2.64-1.273-3.044-1.41-3.195-1.476-3.572-1.574-.367-.095-1.147-.134-1.517-.076M3.079 7.593c-.073.258-.108 7.964-.039 8.507.175 1.356 1.022 2.566 2.221 3.17.562.284 5.145 2.39 5.419 2.49.165.061.358.123.43.138l.13.028V11.46L7.186 9.433 3.132 7.406l-.053.187M16.81 9.434l-4.05 2.026v10.466l.13-.028c.072-.015.265-.077.43-.138.274-.1 4.857-2.206 5.419-2.49a4.073 4.073 0 0 0 2.017-2.332c.251-.749.248-.68.233-5.103-.011-3.352-.023-4.049-.071-4.221l-.058-.205-4.05 2.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxCube);
export default ForwardRef;
