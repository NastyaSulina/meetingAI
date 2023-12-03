#!/usr/bin/env sh
REPOSITORY_NAME="${REGISTRY_ID}/${IMAGE_NAME}"

# получаем токен в виде iamToken: XXX
TOKEN=$(curl -d "{\"yandexPassportOauthToken\":\"${OAUTH}\"}" "https://iam.api.cloud.yandex.net/iam/v1/tokens" | grep 'iamToken')

# достаем только значение токена
IAM_TOKEN=$(echo "${TOKEN}"  | awk '{print $2}' | sed 's/^"\(.*\)",*/\1/')

# получаем первый тег первого образа в виде 'vXXX' и достаем число XXX
PREV_VERSION=$(curl -H "Authorization: Bearer ${IAM_TOKEN}" \
  https://container-registry.api.cloud.yandex.net/container-registry/v1/images?repositoryName=${REPOSITORY_NAME} \
   | jq '.images' | jq '.[0]' | jq -r '.tags[0]' \
    | cut -c2-)

# добавляем единицу к прошлой версии
echo "NEW_VERSION=$((PREV_VERSION + 1))" >> "$GITHUB_ENV"