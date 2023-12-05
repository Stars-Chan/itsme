import React from 'react';

import Link from 'next/link';

import { Pencil1Icon, PlusIcon } from '@radix-ui/react-icons';
import { Badge, Button, Heading, IconButton, Table } from '@radix-ui/themes';

import { DeleteArticleItemButton } from './delete-article-item-button';
import { TogglePublishSwitch } from './toggle-publish-switch';
import { getArticles } from '@/app/_actions/article';
import { Pagination } from '@/components/pagination/pagination';
import { DEFAULT_PAGE, PATHS, PLACEHOLDER_COVER } from '@/constants';
import { formatToDate } from '@/utils';

export default async function AdminArticle({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const { page } = searchParams ?? {};
  const currentPage = typeof page === 'string' ? parseInt(page) : DEFAULT_PAGE;

  const { articles, total } = await getArticles({
    page: currentPage,
  });

  return (
    <div className="flex flex-col gap-4">
      <Heading size={'6'} as="h4">
        文章管理
      </Heading>

      <div className="flex justify-end">
        <Link href={PATHS.ADMIN_ARTICLE_CREATE}>
          <Button color="gray" highContrast>
            <PlusIcon />
            创建文章
          </Button>
        </Link>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="w-[200px]">
              标题
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-[200px]">
              封面
            </Table.ColumnHeaderCell>

            <Table.ColumnHeaderCell className="w-[200px]">
              描述
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-[200px]">
              标签
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-[200px]">
              创建时间
            </Table.ColumnHeaderCell>

            <Table.ColumnHeaderCell className="w-[200px]">
              发布状态
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-[200px]">
              操作
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {articles?.map((article) => (
            <Table.Row key={article.id}>
              <Table.Cell className="!align-middle  w-[200px]">
                {article.title}
              </Table.Cell>
              <Table.Cell className="!align-middle w-[200px]">
                <img
                  src={article.cover ? article.cover : PLACEHOLDER_COVER}
                  alt={article.title}
                />
              </Table.Cell>
              <Table.Cell className="!align-middle  w-[200px]">
                {article.description}
              </Table.Cell>
              <Table.Cell className={'!align-middle  w-[200px]'}>
                <div className="flex gap-2">
                  {article.tags?.length
                    ? article.tags.map((tag) => (
                        <Link
                          key={tag.id}
                          href={`${PATHS.SITE_TAGS}/${tag.friendlyUrl}`}
                          target="_blank"
                        >
                          <Badge>{tag.name}</Badge>
                        </Link>
                      ))
                    : '-'}
                </div>
              </Table.Cell>
              <Table.Cell className="!align-middle  w-[200px]">
                {formatToDate(new Date(article.createdAt))}
              </Table.Cell>

              <Table.Cell className="!align-middle  w-[200px]">
                <TogglePublishSwitch article={article} />
              </Table.Cell>
              <Table.Cell className="!align-middle w-[200px]">
                <div className="flex items-center gap-2">
                  <Link href={`${PATHS.ADMIN_ARTICLE_EDIT}/${article.id}`}>
                    <IconButton color="gray" highContrast>
                      <Pencil1Icon />
                    </IconButton>
                  </Link>
                  <DeleteArticleItemButton article={article} />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Pagination total={total} />
    </div>
  );
}
